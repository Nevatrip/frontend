'use strict';

const getServices = require('../request/getServices');
const getService = require('../request/getService');
const getNav = require('../request/getNav');
const getTags = require('../request/getSettingServiceTags');
const getServiceBasedData = require('../request/getServiceBasedData');

const action = async( context, params ) => {

  const servicesFilter = await getServices();
  const serviceBanner = (await getService('testovaya-ekskursiya-1'))[0];
  const navigation = await getNav();
  const tags = await getTags();
  const serviceBasedData = await getServiceBasedData();

  return {
    page: 'index',
    params,
    api: {
      servicesFilter,
      serviceBanner,
      navigation,
      tags,
      serviceBasedData,
    }
  }
};

module.exports = action;
