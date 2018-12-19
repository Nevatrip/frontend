'use strict';

const action = async( context, params ) => {
  return {
    page: 'test',
    params
  }
};

module.exports = action;
