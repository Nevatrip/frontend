'use strict';

const getServiceCategoryByCategoryAlias = require( '../request/getServiceCategoryByCategoryAlias' );
const getServicesByCategory = require( '../request/getServicesByCategory' );
const getNav = require( '../request/getNav' );
const getServiceBasedData = require( '../request/getServiceBasedData' );
const getServiceCategory = require( '../request/getServiceCategory' );
const getSettingService = require( '../request/getSettingService' );
const getSettingServicesCollections = require( '../request/getSettingServicesCollections' );
const getRoutes = require( '../request/getRoutesBySectionAndLang' );

const action = async( context, params ) => {
  const {
    lang,
    project,
    category
  } = params;

  const routes = await getRoutes( 'settingServiceCategory', lang, project );
  const serviceCategory = category;
  const serviceCategoryFull = await getServiceCategoryByCategoryAlias( project, lang, category );
  const navigation = await getNav( project, lang );
  const settingServicesCollections = await getSettingServicesCollections( project, lang );
  const serviceBasedData = await getServiceBasedData( project, lang );
  const settingService = await getSettingService( project, lang );
  const serviceCategories = await getServiceCategory( project, lang );

  const services = await getServicesByCategory( project, lang, category );

  // const servicesRandom = await getServicesRandom(lang, 9);

  if( services.length > 0 && routes.indexOf( category ) > -1 ) {
    return {
      page: 'servicesByCategory',
      params,
      api: {
        routes,
        services,
        navigation,
        serviceCategory,
        serviceCategoryFull,
        serviceBasedData,
        settingService,
        serviceCategories,
        settingServicesCollections
      }
    }
  }
  return {
    page: 'error',
    params,
    reason: context.reason,
    api: {
      navigation,
      serviceBasedData,
      settingService,
      settingServicesCollections

      // servicesRandom,
    }
  }
};

module.exports = action;
