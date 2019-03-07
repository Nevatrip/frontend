'use strict';

const getServiceBasedData = require( '../request/getServiceBasedData' );
const getNav = require( '../request/getNav' );
const getSettingService = require( '../request/getSettingService' );
const getSettingServicesCollections = require( '../request/getSettingServicesCollections' );

// const getServiceCategoryByCategoryAlias = require( '../request/getServiceCategoryByCategoryAlias' );
// const getServicesByCategory = require( '../request/getServicesByCategory' );
// const getServiceCategory = require( '../request/getServiceCategory' );
// const getServicesRandom = require( '../request/getServicesRandom' );

const action = async( context, params ) => {
  const lang = params.lang;

  const serviceBasedData = await getServiceBasedData();
  const navigation = await getNav( lang );
  const settingService = await getSettingService();
  const settingServicesCollections = await getSettingServicesCollections();

  const services = settingServicesCollections.services;

  const serviceCollection = params.collection;

  // const serviceCategoryFull = await getServiceCategoryByCategoryAlias(serviceCategory, lang);

  console.log( '↓↓_↓↓_↓↓_↓↓_↓↓_↓↓_↓↓_↓↓_↓↓_↓↓_↓↓_↓↓_↓↓_↓↓_↓↓' );
  console.log( serviceCollection );
  console.log( '↑↑_↑↑_↑↑_↑↑_↑↑_↑↑_↑↑_↑↑_↑↑_↑↑_↑↑_↑↑_↑↑_↑↑_↑↑_' );


  // const serviceCategories = await getServiceCategory();


  // const servicesRandom = await getServicesRandom(lang, 9);

  if( services.length > 0 ) {
    return {
      page: 'servicesByCollection',
      params,
      api: {
        serviceBasedData,
        navigation,
        settingService,
        settingServicesCollections,


        services,
        serviceCollection

        // serviceCategoryFull,
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
