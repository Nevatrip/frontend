'use strict';

const getServices = require('../request/getServices');
const getNav = require('../request/getNav');
const getServiceBasedData = require('../request/getServiceBasedData');

const action = async( context, params ) => {

  const tours = await getServices();
  const navigation = await getNav();
  const serviceBasedData = await getServiceBasedData();

  return {
    page: 'error',
    reason: context.reason,
    api: {
      tours,
      navigation,
      serviceBasedData,
    }
  }
};

module.exports = action;
