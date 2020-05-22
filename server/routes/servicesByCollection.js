'use strict';

const getServiceBasedData = require( '../request/getServiceBasedData' );
const getNav = require( '../request/getNav' );
const getRoutes = require( '../request/getRoutesBySectionAndLang' );
const getSettingService = require( '../request/getSettingService' );
const getSettingServicesCollections = require( '../request/getSettingServicesCollections' );
const getServiceCollectionByCollectionAlias = require( '../request/getServiceCollectionByCollectionAlias' );
const getSettingSocials = require( '../request/getSettingSocials' );
const getNavFooter = require( '../request/getNavFooter' );
const pathToImage = require( '../request/_imageBuilder' );

const action = async ( context, params ) => {
  const {
    lang,
    project,
    collection
  } = params;

  const [
    routes,
    serviceBasedData,
    navigation,
    footerNavigation,
    settingServicesCollections,
    settingSocials
  ] = await Promise.all(
    [
      getRoutes( 'settingServicesCollections', lang, project ),
      getServiceBasedData( project, lang ),
      getNav( project, lang ),
      getNavFooter( project, lang ),
      getSettingServicesCollections( project, lang ),
      getSettingSocials( project, lang )
    ]
  )

  const serviceCategoryFull = await getServiceCollectionByCollectionAlias( collection, lang, project );
  const services = ( serviceCategoryFull || {} ).services;
  const settingService = await getSettingService( project, lang );
  const moreText = ( ( settingService || {} ).serviceViewListItemLgMore || {} )[lang];
  const servicePriceOutside = ( ( settingService || {} ).servicePriceOutside || {} )[lang];

  const currentLang = lang;
  const serviceCollection = collection;

  services && services.forEach( item => {
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
    };

    item.serviceImgUrl = titleImageCropped;
    item.mainUrl = params.urlTo( 'service', itemParams );

    return item;
  } );

  settingSocials && settingSocials.forEach( item => {
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
      }
    }
  }
};

module.exports = action;
