'use strict';

const getServiceCategoryByCategoryAlias = require('../request/getServiceCategoryByCategoryAlias');
const getServicesByCategory = require('../request/getServicesByCategory');
const getNav = require('../request/getNav');
const getServiceBasedData = require('../request/getServiceBasedData');

const action = async( context, params ) => {
  const lang = params.lang;

  const serviceCategory = params.category;

  const serviceCategoryFull = await getServiceCategoryByCategoryAlias( serviceCategory, lang );

  const services = await getServicesByCategory( serviceCategory, lang );
  const navigation = await getNav(lang);

  const serviceBasedData = await getServiceBasedData();

  return {
    page: 'servicesByCategory',
    params,
    api: {
      services,
      navigation,
      serviceCategory,
      serviceCategoryFull,
      serviceBasedData,
    }
  }
};

module.exports = action;
