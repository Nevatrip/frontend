'use strict';

const getSettingService = require( '../request/getSettingService' );
const getServicesByCategory = require( '../request/getServicesByCategory' );
const getServiceCategory = require( '../request/getServiceCategory' );
const getServiceCollection = require( '../request/getSettingServicesCollections' );
const getSettingBlog = require( '../request/getSettingBlog' );
const getBlogArticles = require( '../request/getBlogArticles' );
const getArticles = require( '../request/getArticles' );

const asyncForEach = async( array, callback ) => {
  for( let index = 0; index < array.length; index++ ) {
    await callback( array[index], index, array )
  }
}

const action = async( context, params ) => {
  const {
    lang,
    project
  } = params;

  const settingService = await getSettingService( project, lang );
  const articles = await getArticles( project, lang );
  const settingBlog = ( await getSettingBlog( project, lang ) )[0];

  //главная(ые) страница(цы)
  const mainArr = [
    {
      title: ( settingService.serviceMainPage || {} )[lang] || '',
      to: 'index'
    }
  ];

  //категории
  const serviceCategory = await getServiceCategory( project, lang );
  const catArr = [];

  //сервисы внутри категорий
  await asyncForEach( serviceCategory, async item => {
    const inners = await getServicesByCategory( project, lang, ( ( ( ( item || {} ).title || {} )[lang] || {} ).key || {} ).current );

    catArr.push(
      {
        title: ( ( ( item || '' ).title || '' )[lang] || '' ).name || '',
        to: 'servicesByCategory',
        params: {
          category: ( ( ( ( item || '' ).title || '' )[lang] || '' ).key || '' ).current || ''
        },
        inner: inners.map( serv => (
          {
            title: ( ( ( serv || {} ).title || {} )[lang] || {} ).name || '',
            to: 'service',
            params: {
              category: ( ( ( ( item || {} ).title || {} )[lang] || {} ).key || {} ).current || '',
              service: ( ( ( ( serv || {} ).title || {} )[lang] || {} ).key || {} ).current || ''
            }
          }
        ) )
      }
    )
  } );

  //коллекции
  const serviceСollection = await getServiceCollection( project, lang );
  const colArr = [];

  serviceСollection.forEach( item => {
    colArr.push(
      {
        title: ( ( ( item || {} ).title || {} )[lang] || {} ).name || '',
        to: 'servicesByCollection',
        params: {
          collection: ( ( ( ( item || {} ).title || {} )[lang] || {} ).key || {} ).current || ''
        }
      }
    )
  } );

  //блог
  const blogArr = [];
  const blogInners = await getBlogArticles( project, lang );

  blogArr.push(
    {
      title: ( ( settingBlog || {} ).heading || {} )[lang] || '',
      to: 'blog',
      inner: blogInners.map( blogArt => (
        {
          title: ( blogArt || {} ).h1 || '',
          to: 'service',
          params: {
            category: 'blog',
            service: ( blogArt || {} ).alias || ''
          }
        }
      ) )
    }
  );

  //articles
  const artArr = [];

  articles.forEach( item => {
    artArr.push(
      {
        title: ( ( ( item || {} ).title || {} )[lang] || {} ).name || '',
        to: 'article',
        params: {
          article: ( ( ( ( item || {} ).title || {} )[lang] || {} ).key || {} ).current || ''
        }
      }
    )
  } );

  const sitemapArr = mainArr.concat( catArr, colArr, blogArr, artArr );

  return {
    page: 'sitemapxml',
    doctype: 'xml',
    params,
    api: {
      sitemapArr
    }
  }
};

module.exports = action;
