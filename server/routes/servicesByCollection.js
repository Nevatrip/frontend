'use strict';
const imageUrlBuilder = require( '@sanity/image-url' );

const getServiceBasedData = require( '../request/getServiceBasedData' );
const getNav = require( '../request/getNav' );
const getRoutes = require( '../request/getRoutesBySectionAndLang' );
const getSettingService = require( '../request/getSettingService' );
const getSettingServicesCollections = require( '../request/getSettingServicesCollections' );
const getServiceCollectionByCollectionAlias = require( '../request/getServiceCollectionByCollectionAlias' );

const action = async( context, params ) => {
  const {
    lang,
    project,
    collection
  } = params;
  const routes = await getRoutes( 'settingServicesCollections', lang, project );
  const serviceBasedData = await getServiceBasedData( project, lang );
  const navigation = await getNav( project, lang );
  const settingService = await getSettingService( project, lang );
  const settingServicesCollections = await getSettingServicesCollections( project, lang );
  const serviceCollection = collection;
  const serviceCategoryFull = await getServiceCollectionByCollectionAlias( collection, lang, project );
  const services = ( serviceCategoryFull || {} ).services;
  const currentLang = lang;
  const moreText = ( ( settingService || {} ).serviceViewListItemLgMore || {} )[currentLang];
  const servicePriceOutside = ( ( settingService || {} ).servicePriceOutside || {} )[currentLang];

  const builder = imageUrlBuilder(
    {
      projectId: process.env[`API_ID_${ params.project.toUpperCase() }`],
      dataset: process.env[`API_DATASET_${ params.project.toUpperCase() }`]
    }
  );

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

  // const serviceCategories = await getServiceCategory();
  // const servicesRandom = await getServicesRandom(lang, 9);

  if( ( services || [] ).length > 0 && routes.indexOf( collection ) > -1 ) {
    return {
      page: 'servicesByCollection',
      params,
      api: {
        routes,
        serviceBasedData,
        navigation,
        settingService,
        settingServicesCollections,
        services,
        serviceCollection,
        serviceCategoryFull,
        currentLang,
        moreText,
        servicePriceOutside

        // serviceCategories,
      }
    }
  }

  return {
    page: 'error',
    params,
    reason: context.reason,
    api: {
      serviceBasedData,
      navigation,
      settingService,
      settingServicesCollections

      // servicesRandom,
    }
  }
};

module.exports = action;
