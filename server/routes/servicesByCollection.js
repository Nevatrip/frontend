'use strict';
const getServiceBasedData = require( '../request/getServiceBasedData' );
const getNav = require( '../request/getNav' );
const getRoutes = require( '../request/getRoutesBySectionAndLang' );
const getSettingService = require( '../request/getSettingService' );
const getSettingServicesCollections = require( '../request/getSettingServicesCollections' );
const getServiceCollectionByCollectionAlias = require( '../request/getServiceCollectionByCollectionAlias' );

const action = async( context, params ) => {
  const {
    lang,
    project
  } = params;
  const routes = await getRoutes( 'settingServicesCollections', lang );
  const serviceBasedData = await getServiceBasedData();
  const navigation = await getNav( project, lang );
  const settingService = await getSettingService();
  const settingServicesCollections = await getSettingServicesCollections();
  const serviceCollection = params.collection;
  const serviceCategoryFull = await getServiceCollectionByCollectionAlias( params.collection, lang );
  const services = ( serviceCategoryFull || {} ).services;

  // const serviceCategories = await getServiceCategory();
  // const servicesRandom = await getServicesRandom(lang, 9);

  if( ( services || [] ).length > 0 && routes.indexOf( params.collection ) > -1 ) {
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
        serviceCategoryFull

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
