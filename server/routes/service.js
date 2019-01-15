'use strict';

const getServices = require('../request/getServices');
const getService = require('../request/getService');
const getNav = require('../request/getNav');

const action = async( context, params ) => {

  const alias = params.service;

  const tours = await getServices();
  const tour = await getService( alias );
  const navigation = await getNav();

  return {
    page: 'service',
    params,
    api: {
      tours,
      tour,
      navigation
    }
  }
};

module.exports = action;
