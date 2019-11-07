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

  const tours = await getServices();
  const navigation = await getNav( lang, project );
  const serviceBasedData = await getServiceBasedData();
  const settingService = await getSettingService();
  const settingServicesCollections = await getSettingServicesCollections();

  return {
    page: 'error',
    params,
    reason: context.reason,
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
