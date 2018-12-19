'use strict';

const action = async( context, params ) => {
  return {
    page: 'login',
    params
  }
};

module.exports = action;
