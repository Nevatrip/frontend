'use strict';

const getServicesByCategory = require('../request/getServicesByCategory');
const getNav = require('../request/getNav');

const action = async( context, params ) => {

  const serviceCategory = params.category;

  const services = await getServicesByCategory( serviceCategory );
  const navigation = await getNav();

  return {
    page: 'servicesByCategory',
    params,
    api: {
      services,
      navigation
    }
  }
};

module.exports = action;
