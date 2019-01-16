'use strict';

const getServices = require('../request/getServices');
const getService = require('../request/getService');
const getNav = require('../request/getNav');

const action = async( context, params ) => {

  const services = await getServices();
  const servicesFilter = (await getServices());
  const serviceBanner = (await getService('mitiorr'))[0];
  const navigation = await getNav();

  return {
    page: 'index',
    params,
    api: {
      servicesFilter,
      services,
      serviceBanner,
      navigation
    }
  }
};

module.exports = action;
