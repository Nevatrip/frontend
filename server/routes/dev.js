'use strict';

const getNav = require('../request/getNav');

const action = async( context, params ) => {

  const navigation = await getNav();

  return {
    page: 'dev',
    params,
    api: {
      navigation
    }
  }
};

module.exports = action;
