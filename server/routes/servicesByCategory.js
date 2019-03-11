'use strict';

const getServiceCategoryByCategoryAlias = require( '../request/getServiceCategoryByCategoryAlias' );
const getServicesByCategory = require( '../request/getServicesByCategory' );
const getNav = require( '../request/getNav' );
const getServiceBasedData = require( '../request/getServiceBasedData' );
const getServiceCategory = require( '../request/getServiceCategory' );
const getSettingService = require( '../request/getSettingService' );
const getSettingServicesCollections = require( '../request/getSettingServicesCollections' );

// const getServicesRandom = require( '../request/getServicesRandom' );

const getRoutes = require( '../request/getRoutesBySectionAndLang' );

const action = async( context, params ) => {
  const lang = params.lang;
  const routes = await getRoutes('settingServiceCategory', lang);

  const serviceCategory = params.category;

  const serviceCategoryFull = await getServiceCategoryByCategoryAlias( serviceCategory, lang );

  const navigation = await getNav( lang );
  const settingServicesCollections = await getSettingServicesCollections();

  const serviceBasedData = await getServiceBasedData();
  const settingService = await getSettingService();
  const serviceCategories = await getServiceCategory();

  const services = await getServicesByCategory( serviceCategory, lang );

  // const servicesRandom = await getServicesRandom(lang, 9);

  if(( services.length > 0 ) && (routes.indexOf(params.category)>-1)) {
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
