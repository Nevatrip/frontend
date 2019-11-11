'use strict';

const getServices = require( '../request/getServices' );
const getService = require( '../request/getService' );
const getNav = require( '../request/getNav' );
const getServicesRandom = require( '../request/getServicesRandomByCategoryExcludeID' );
const getServiceBasedData = require( '../request/getServiceBasedData' );
const getSettingService = require( '../request/getSettingService' );
const getSettingServicesCollections = require( '../request/getSettingServicesCollections' );
const getServiceCategoryByServiceAlias = require( '../request/getServiceCategoryByServiceAlias' );

const action = async( context, params ) => {
  const {
    service,
    lang,
    project,
    category
  } = params;

  const tours = await getServices( project, lang );

  const categoryName = ( ( ( ( ( await getServiceCategoryByServiceAlias( project, lang, service ) || {} ).category || {} ).title || {} )[params.lang] || {} ).key || {} ).current;

  const serviceResponse = await getService( project, lang, categoryName, service );

  const navigation = await getNav( project, lang );

  const excludeID = ( serviceResponse || {} )._id;
  const servicesRandom = await ( categoryName ? getServicesRandom( project, lang, categoryName, excludeID ) : getServicesRandom( project, lang, category ) );

  const serviceBasedData = await getServiceBasedData( project, lang );
  const settingService = await getSettingService( project, lang );
  const settingServicesCollections = await getSettingServicesCollections( project, lang );

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
