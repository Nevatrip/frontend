'use strict';

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
const pathToImage = require( '../request/_imageBuilder' );

const action = async ( context, params ) => {
  const {
    lang,
    project,
    category
  } = params;

  const [
    routes,
    serviceCategoryFull,
    navigation,
    footerNavigation,
    settingServicesCollections,
    serviceBasedData,
    settingService,
    serviceCategories,
    settingSocials,
    services
  ] = await Promise.all(
    [
      getRoutes( 'settingServiceCategory', lang, project ),
      getServiceCategoryByCategoryAlias( project, lang, category ),
      getNav( project, lang ),
      getNavFooter( project, lang ),
      getSettingServicesCollections( project, lang ),
      getServiceBasedData( project, lang ),
      getSettingService( project, lang ),
      getServiceCategory( project, lang ),
      getSettingSocials( project, lang ),
      getServicesByCategory( project, lang, category )
    ]
  )

  const serviceCategory = category;
  const currentLang = lang;
  const moreText = ( ( settingService || {} ).serviceViewListItemLgMore || {} )[currentLang];
  const servicePriceOutside = ( ( settingService || {} ).servicePriceOutside || {} )[currentLang];

  services.map( item => {
    let titleImageCropped = '';

    if( item.titleImage ) {
      if( item.titleImage.hotspot ) {
        titleImageCropped = pathToImage( item.titleImage )
          .focalPoint( item.titleImage.hotspot.x.toFixed( 2 ), item.titleImage.hotspot.y.toFixed( 2 ) )
          .fit( 'crop' )
          .width( 404 )
          .height( 277 )
          .url();
      } else if( item.titleImage ) {
        titleImageCropped = pathToImage( item.titleImage )
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

  settingSocials.forEach( item => {
    item.img = pathToImage( item.imgSrc ).url();
  } );

  //meta, og
  const meta = {
    title: ( ( ( serviceCategoryFull || {} ).titleLong || {} )[lang] || '' ).name || ( ( ( serviceCategoryFull || {} ).title || {} )[lang] || '' ).name || '',
    description: ( ( serviceCategoryFull || {} ).descriptionMeta || {} )[lang] || ( ( serviceCategoryFull || {} ).subTitle || {} )[lang] || '',
    image: pathToImage( ( ( ( serviceCategoryFull || {} ).titleImage || {} ).asset || {} )._ref || '' ).fit( 'crop' )
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
};

module.exports = action;
