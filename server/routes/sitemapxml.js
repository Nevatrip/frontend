'use strict';

const getServicesByCategory = require( '../request/getServicesByCategory' );
const getServiceCategory = require( '../request/getServiceCategory' );
const getServiceCollection = require( '../request/getSettingServicesCollections' );
const getBlogArticles = require( '../request/getBlogArticles' );
const getArticles = require( '../request/getArticles' );

const asyncForEach = async( array, callback ) => {
  for( let index = 0; index < array.length; index++ ) {
    await callback( array[index], index, array )
  }
};

const action = async( context, params ) => {
  const {
    project,
    lang
  } = params;

  const articles = await getArticles( project, lang );

  //главная(ые) страница(цы)
  const mainArr = [
    {
      to: 'index',
      params: {
        project,
        lang
      }
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
        to: 'servicesByCategory',
        params: {
          project,
          lang,
          category: ( ( ( ( item || '' ).title || '' )[lang] || '' ).key || '' ).current || ''
        }
      },
    )


    inners.forEach( serv =>
      catArr.push( {
        to: 'service',
        params: {
          project,
          lang,
          category: ( ( ( ( item || {} ).title || {} )[lang] || {} ).key || {} ).current || '',
          service: ( ( ( ( serv || {} ).title || {} )[lang] || {} ).key || {} ).current || ''
        }
      }
      )
    )
  } );

  //коллекции
  const serviceСollection = await getServiceCollection( project, lang );
  const colArr = [];

  serviceСollection.forEach( item => {
    colArr.push(
      {
        to: 'servicesByCollection',
        params: {
          project,
          lang,
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
      to: 'blog',
      params: {
        project,
        lang
      }
    }
  );

  blogInners.forEach( blogArt =>
    blogArr.push( {
      to: 'service',
      params: {
        project,
        lang,
        category: 'blog',
        service: ( blogArt || {} ).alias || ''
      }
    } )
  )

  //articles
  const artArr = [];

  articles.forEach( item => {
    artArr.push(
      {
        to: 'article',
        params: {
          project,
          lang,
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
