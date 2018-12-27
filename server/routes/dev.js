'use strict';

const action = async( context, params ) => {

  return {
    page: 'dev',
    params
  }
};

module.exports = action;
