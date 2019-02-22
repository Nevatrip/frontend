'use strict';

const getServices = require('../request/getServices');
const getService = require('../request/getService');
const getNav = require('../request/getNav');
const getServicesRandom = require('../request/getServicesRandomByCategoryExcludeID');
const getServiceBasedData = require('../request/getServiceBasedData');
const getSettingService = require('../request/getSettingService');

const action = async (context, params) => {
  const {
    service,
    lang,
    category
  } = params;

  const tours = await getServices();
  const serviceResponse = (await getService(service, lang, category));

  const navigation = await getNav(lang);

  const categoryName = (((((serviceResponse || {}).category || {}).title || {})[lang] || {}).key || {}).current || '';
  const excludeID = (serviceResponse || {})._id;
  const servicesRandom = await (categoryName ? getServicesRandom(categoryName, excludeID, lang) : getServicesRandom(category, '', lang));

  const serviceBasedData = await getServiceBasedData();
  const settingService = await getSettingService();

  if (serviceResponse) {
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
      }
    }
  } else {
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
      }
    }
  }
};

module.exports = action;
