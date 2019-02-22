'use strict';

const getServices = require('../request/getServices');
const getNav = require('../request/getNav');
const getServiceBasedData = require('../request/getServiceBasedData');
const getSettingService = require('../request/getSettingService');

const action = async( context, params ) => {
  const lang = params.lang;

  const tours = await getServices();
  const navigation = await getNav(lang);
  const serviceBasedData = await getServiceBasedData();
  const settingService = await getSettingService();

  return {
    page: 'error',
    params,
    reason: context.reason,
    api: {
      tours,
      navigation,
      serviceBasedData,
      settingService,
    }
  }
};

module.exports = action;
