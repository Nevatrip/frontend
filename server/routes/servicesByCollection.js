'use strict';
const imageUrlBuilder = require( '@sanity/image-url' );

const getServiceBasedData = require( '../request/getServiceBasedData' );
const getNav = require( '../request/getNav' );
const getRoutes = require( '../request/getRoutesBySectionAndLang' );
const getSettingService = require( '../request/getSettingService' );
const getSettingServicesCollections = require( '../request/getSettingServicesCollections' );
const getServiceCollectionByCollectionAlias = require( '../request/getServiceCollectionByCollectionAlias' );
const getSettingSocials = require( '../request/getSettingSocials' );
const getNavFooter = require( '../request/getNavFooter' );

const action = async( context, params ) => {
  const {
    lang,
    project,
    collection
  } = params;

  const builder = imageUrlBuilder(
    {
      projectId: process.env[`API_ID_${ params.project.toUpperCase() }`],
      dataset: process.env[`API_DATASET_${ params.project.toUpperCase() }`]
    }
  );

  params._urlFor = source => builder.image( source );

  const routes = await getRoutes( 'settingServicesCollections', lang, project );
  const serviceBasedData = await getServiceBasedData( project, lang );
  const navigation = await getNav( project, lang );
  const footerNavigation = await getNavFooter( project, lang );
  const settingService = await getSettingService( project, lang );
  const settingServicesCollections = await getSettingServicesCollections( project, lang );
  const serviceCollection = collection;
  const serviceCategoryFull = await getServiceCollectionByCollectionAlias( collection, lang, project );
  const services = ( serviceCategoryFull || {} ).services;
  const currentLang = lang;
  const moreText = ( ( settingService || {} ).serviceViewListItemLgMore || {} )[currentLang];
  const servicePriceOutside = ( ( settingService || {} ).servicePriceOutside || {} )[currentLang];
  const settingSocials = await getSettingSocials( project, lang );

  services && services.map( item => {
    let titleImageCropped = '';

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
    };

    item.serviceImgUrl = titleImageCropped;
    item.mainUrl = params.urlTo( 'service', itemParams );

    return item;
  } );

  settingSocials && settingSocials.map( item => {
    item.img = params._urlFor( item.imgSrc ).url();
  } );

  // const serviceCategories = await getServiceCategory();
  // const servicesRandom = await getServicesRandom(lang, 9);

  //if( ( services || [] ).length > 0 && routes.indexOf( collection ) > -1 ) {
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
  };

  if( serviceCategoryFull ) {
    return {
      page: 'servicesByCollection',
      params,
      api: {
        routes,
        serviceBasedData,
        navigation,
        footerNavigation,
        settingService,
        settingServicesCollections,
        services,
        serviceCollection,
        serviceCategoryFull,
        currentLang,
        moreText,
        servicePriceOutside,
        settingSocials,
        meta

        // serviceCategories,
      }
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
  //     serviceBasedData,
  //     navigation,
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
