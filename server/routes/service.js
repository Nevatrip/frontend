'use strict';

const getServices = require( '../request/getServices' );
const getService = require( '../request/getService' );
const getNav = require( '../request/getNav' );
const getServicesRandom = require( '../request/getServicesRandomByCategoryExcludeID' );
const getServiceBasedData = require( '../request/getServiceBasedData' );
const getSettingService = require( '../request/getSettingService' );
const getSettingServicesCollections = require( '../request/getSettingServicesCollections' );
const getServiceCategoryByServiceAlias = require('../request/getServiceCategoryByServiceAlias');

const action = async( context, params ) => {
  const {
    service,
    lang,
    category
  } = params;

  const tours = await getServices();

  const categoryName = (await getServiceCategoryByServiceAlias( params.service, params.lang )).category.title[params.lang].key.current;

  const serviceResponse = await getService( service, lang, categoryName );

  const navigation = await getNav( lang );

  const excludeID = ( serviceResponse || {} )._id;
  const servicesRandom = await ( categoryName ? getServicesRandom( categoryName, excludeID, lang ) : getServicesRandom( category, '', lang ) );

  const serviceBasedData = await getServiceBasedData();
  const settingService = await getSettingService();
  const settingServicesCollections = await getSettingServicesCollections();

  console.log('---------');
  console.log(params.service);
  console.log(params.lang);
  console.log(categoryName);
  console.log('---------');

  if( serviceResponse ) {
    return {
      page: 'service',
      params,
      api: {
        tours,
        service: serviceResponse,
        navigation,
        servicesRandom,
        serviceBasedData,
        settingService,
        settingServicesCollections
      }
    }
  }
  return {
    page: 'error',
    params,
    reason: context.reason,
    api: {
      tours,
      navigation,
      servicesRandom,
      serviceBasedData,
      settingService,
      settingServicesCollections
    }
  }
};

module.exports = action;
