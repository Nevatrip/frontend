'use strict';

const getServices = require('../request/getServices');
const getNav = require('../request/getNav');

const action = async( context, params ) => {

  const tours = await getServices();
  const navigation = await getNav();

  return {
    page: 'error',
    reason: context.reason,
    api: {
      tours,
      navigation
    }
  }
};

module.exports = action;
