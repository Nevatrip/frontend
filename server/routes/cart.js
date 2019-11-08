'use strict';

const getServices = require( '../request/getServices' );
const getNav = require( '../request/getNav' );
const getServiceBasedData = require( '../request/getServiceBasedData' );
const getSettingService = require( '../request/getSettingService' );
const getSettingServicesCollections = require( '../request/getSettingServicesCollections' );

const action = async( context, params ) => {
  const {
    lang,
    project
  } = params;

  const tours = await getServices( project, lang );
  const navigation = await getNav( project, lang );
  const serviceBasedData = await getServiceBasedData( project, lang );
  const settingService = await getSettingService( project, lang );
  const settingServicesCollections = await getSettingServicesCollections( project, lang );

  return {
    page: 'cart',
    params,
    api: {
      tours,
      navigation,
      serviceBasedData,
      settingServicesCollections,
      settingService
    }
  }
};

module.exports = action;
