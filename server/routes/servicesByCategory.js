'use strict';

const getServiceCategoryByCategoryAlias = require('../request/getServiceCategoryByCategoryAlias');
const getServicesByCategory = require('../request/getServicesByCategory');
const getNav = require('../request/getNav');
const getServiceBasedData = require('../request/getServiceBasedData');
const getServiceCategory = require('../request/getServiceCategory');
const getSettingService = require('../request/getSettingService');

const action = async( context, params ) => {
  const lang = params.lang;

  const serviceCategory = params.category;

  const serviceCategoryFull = await getServiceCategoryByCategoryAlias( serviceCategory, lang );

  const navigation = await getNav(lang);

  const serviceBasedData = await getServiceBasedData();
  const settingService = await getSettingService();
  const serviceCategories = await getServiceCategory();

  const services = await getServicesByCategory( serviceCategory, lang );

  return {
    page: 'servicesByCategory',
    params,
    api: {
      services,
      navigation,
      serviceCategory,
      serviceCategoryFull,
      serviceBasedData,
      settingService,
      serviceCategories,
    }
  }
};

module.exports = action;
