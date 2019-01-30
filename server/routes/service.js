'use strict';

const getServices = require('../request/getServices');
const getService = require('../request/getService');
const getNav = require('../request/getNav');
const getServicesRandom = require('../request/getServicesRandomByCategoryExcludeID');

const action = async (context, params) => {
  const alias = params.service;

  const tours = await getServices();
  const service = await getService(alias);
  const navigation = await getNav();

  const categoryName = service[0].category.key.current;
  const excludeID = service[0]._id;
  const servicesRandom = await getServicesRandom(categoryName, excludeID);

  return {
    page: 'service',
    params,
    api: {
      tours,
      service,
      navigation,
      servicesRandom
    }
  }
};

module.exports = action;
