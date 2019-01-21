'use strict';

const getServiceCategoryByCategoryAlias = require('../request/getServiceCategoryByCategoryAlias');
const getServicesByCategory = require('../request/getServicesByCategory');
const getNav = require('../request/getNav');

const action = async( context, params ) => {

  const serviceCategory = params.category;

  const serviceCategoryFull = await getServiceCategoryByCategoryAlias( serviceCategory );

  const services = await getServicesByCategory( serviceCategory );
  const navigation = await getNav();

  return {
    page: 'servicesByCategory',
    params,
    api: {
      services,
      navigation,
      serviceCategory,
      serviceCategoryFull
    }
  }
};

module.exports = action;
