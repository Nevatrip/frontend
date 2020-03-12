'use strict';
const imageUrlBuilder = require( '@sanity/image-url' );

const getServiceCategoryByCategoryAlias = require( '../request/getServiceCategoryByCategoryAlias' );
const getServicesByCategory = require( '../request/getServicesByCategory' );
const getNav = require( '../request/getNav' );
const getServiceBasedData = require( '../request/getServiceBasedData' );
const getServiceCategory = require( '../request/getServiceCategory' );
const getSettingService = require( '../request/getSettingService' );
const getSettingServicesCollections = require( '../request/getSettingServicesCollections' );
const getRoutes = require( '../request/getRoutesBySectionAndLang' );
const getSettingSocials = require( '../request/getSettingSocials' );
const getNavFooter = require( '../request/getNavFooter' );

const action = async( context, params ) => {
  const {
    lang,
    project,
    category
  } = params;

  const builder = imageUrlBuilder(
    {
      projectId: process.env[`API_ID_${ params.project.toUpperCase() }`],
      dataset: process.env[`API_DATASET_${ params.project.toUpperCase() }`]
    }
  );

  params._urlFor = source => builder.image( source );

  const routes = await getRoutes( 'settingServiceCategory', lang, project );
  const serviceCategory = category;
  const serviceCategoryFull = await getServiceCategoryByCategoryAlias( project, lang, category );
  const navigation = await getNav( project, lang );
  const footerNavigation = await getNavFooter( project, lang );
  const settingServicesCollections = await getSettingServicesCollections( project, lang );
  const serviceBasedData = await getServiceBasedData( project, lang );
  const settingService = await getSettingService( project, lang );
  const serviceCategories = await getServiceCategory( project, lang );
  const settingSocials = await getSettingSocials( project, lang );

  const services = await getServicesByCategory( project, lang, category );
  const currentLang = lang;
  const moreText = ( ( settingService || {} ).serviceViewListItemLgMore || {} )[currentLang];
  const servicePriceOutside = ( ( settingService || {} ).servicePriceOutside || {} )[currentLang];

  services.map( item => {
    let titleImageCropped = '';

    params._urlFor = source => builder.image( source );
    if( item.titleImage ) {
      if( item.titleImage.hotspot ) {
        titleImageCropped = params._urlFor( item.titleImage )
          .focalPoint( item.titleImage.hotspot.x.toFixed( 2 ), item.titleImage.hotspot.y.toFixed( 2 ) )
          .fit( 'crop' )
          .width( 404 )
          .height( 277 )
          .url();
      } else if( item.titleImage ) {
        titleImageCropped = params._urlFor( item.titleImage )
          .fit( 'crop' )
          .width( 404 )
          .height( 277 )
          .url();
      }
    }
    const itemParams = {
      category: ( ( ( ( item.category || {} ).title || {} )[currentLang] || {} ).key || {} ).current || '//',
      service: ( ( item.title[currentLang] || {} ).key || {} ).current || '//',
      lang,
      project
    }

    item.serviceImgUrl = titleImageCropped;
    item.mainUrl = params.urlTo( 'service', itemParams );

    return item;
  } );

  settingSocials.map( item => {
    item.img = params._urlFor( item.imgSrc ).url();
  } );

  // const servicesRandom = await getServicesRandom(lang, 9);

  //if( services.length > 0 && routes.indexOf( category ) > -1 ) {
  //meta, og
  const meta = {
    title: ( ( ( serviceCategoryFull || {} ).titleLong || {} )[lang] || '' ).name || ( ( ( serviceCategoryFull || {} ).title || {} )[lang] || '' ).name || '',
    description: ( ( serviceCategoryFull || {} ).descriptionMeta || {} )[lang] || ( ( serviceCategoryFull || {} ).subTitle || {} )[lang] || '',
    image: params._urlFor( ( ( ( serviceCategoryFull || {} ).titleImage || {} ).asset || {} )._ref || '' ).fit( 'crop' )
      .width( 1200 )
      .height( 620 )
      .url() || '',
    type: 'website',
    url: ( ( serviceBasedData || {} ).langSiteLink || {} )[lang],
    width: '1200',
    height: '620',
    card: 'summary_large_image'
  }

  return {
    page: 'servicesByCategory',
    params,
    api: {
      routes,
      services,
      navigation,
      footerNavigation,
      serviceCategory,
      serviceCategoryFull,
      serviceBasedData,
      settingService,
      serviceCategories,
      settingServicesCollections,
      currentLang,
      moreText,
      servicePriceOutside,
      settingSocials,
      meta
    }
  }

  //}

  //meta, og
  // const meta = {
  //   title: ( ( serviceBasedData || {} ).title || {} )[lang] || '',
  //   description: ( ( serviceBasedData || {} ).shortDescription || {} )[lang] || '',
  //   image: params._urlFor( ( ( ( serviceBasedData || {} ).favicon || {} ).asset || {} )._ref || '' ).fit( 'crop' )
  //     .width( 280 )
  //     .height( 280 )
  //     .url() || '',
  //   type: 'website',
  //   url: ( ( serviceBasedData || {} ).langSiteLink || {} )[lang],
  //   width: '280',
  //   height: '280',
  //   card: 'summary'
  // }
  //
  // return {
  //   page: 'error',
  //   params,
  //   reason: context.reason,
  //   api: {
  //     navigation,
  //     serviceBasedData,
  //     settingService,
  //     settingServicesCollections,
  //     settingSocials,
  //     meta
  //
  //     // servicesRandom,
  //   }
  // }
};

module.exports = action;
