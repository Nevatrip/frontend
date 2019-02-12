'use strict';

const getServiceCategoryByCategoryAlias = require('../request/getServiceCategoryByCategoryAlias');
const getServicesByCategory = require('../request/getServicesByCategory');
const getNav = require('../request/getNav');
const getServiceBasedData = require('../request/getServiceBasedData');
const getServiceCategory = require('../request/getServiceCategory');

const action = async( context, params ) => {
  const lang = params.lang;

  const serviceCategory = params.category;

  const serviceCategoryFull = await getServiceCategoryByCategoryAlias( serviceCategory, lang );


  const navigation = await getNav(lang);

  const serviceBasedData = await getServiceBasedData();
  const serviceCategories = await getServiceCategory();
  // const currentServiceCategoryArr = await serviceCategories.filter(item => (
  //   item.title[lang].key.current===serviceCategory
  // ));
  // const currentServiceCategory = await (currentServiceCategoryArr[0].title[lang].key.current);

  const services = await getServicesByCategory( serviceCategory, lang );

  console.log('↓↓_↓↓_↓↓_↓↓_↓↓_↓↓_↓↓_↓↓_↓↓_↓↓_↓↓_↓↓_↓↓_↓↓_↓↓');
  console.log('язык              - ',lang);
  console.log('аргумент          - ',serviceCategory);
  console.log('ответ             - ',serviceCategoryFull?serviceCategoryFull.title[lang].key.current:'пустой' );
  // console.log('категории         - ',currentServiceCategoryArr );
  // console.log('текущая категория - ',currentServiceCategory );
  console.log('↑↑_↑↑_↑↑_↑↑_↑↑_↑↑_↑↑_↑↑_↑↑_↑↑_↑↑_↑↑_↑↑_↑↑_↑↑_');

  return {
    page: 'servicesByCategory',
    params,
    api: {
      services,
      navigation,
      serviceCategory,
      serviceCategoryFull,
      serviceBasedData,
      serviceCategories
    }
  }
};

module.exports = action;
