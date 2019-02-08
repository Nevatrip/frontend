'use strict';

const getServices = require('../request/getServices');
const getService = require('../request/getService');
const getNav = require('../request/getNav');
const getServicesRandom = require('../request/getServicesRandomByCategoryExcludeID');
const getServiceBasedData = require('../request/getServiceBasedData');

const action = async (context, params) => {
  const alias = params.service;
  const lang = params.lang;

  const tours = await getServices();
  const service = await getService(alias, lang);
  const navigation = await getNav();

  const categoryName = service[0].category.key.current;
  const excludeID = service[0]._id;
  const servicesRandom = await getServicesRandom(categoryName, excludeID);

  const serviceBasedData = await getServiceBasedData();

  return {
    page: 'service',
    params,
    api: {
      tours,
      service,
      navigation,
      servicesRandom,
      serviceBasedData,
    }
  }
};

module.exports = action;
