'use strict';

const getServices = require('../request/getServices');
const getService = require('../request/getService');
const getNav = require('../request/getNav');

const action = async( context, params ) => {

  const services = await getServices();
  const serviceBanner = (await getService('mitior'))[0];
  const navigation = await getNav();

  return {
    page: 'index',
    params,
    api: {
      services,
      serviceBanner,
      navigation
    }
  }
};

module.exports = action;
