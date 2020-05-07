'use strict';

const getServicesByCategory = require( '../request/getServicesByCategory' );
const getServiceCategory = require( '../request/getServiceCategory' );
const getServiceCollection = require( '../request/getSettingServicesCollections' );
const getBlogArticles = require( '../request/getBlogArticles' );
const getArticles = require( '../request/getArticles' );
const getServiceBasedData = require( '../request/getServiceBasedData' );

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

  const serviceBasedData = await getServiceBasedData( project, lang );
  const link = ( serviceBasedData || {} ).langSiteLink[lang].replace( /\s/g, '' );
  const site = link.charAt( link.length-1 ) === '/' ? link.substring( 0, link.length-1 ) : link;

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

    if( ( ( ( ( item || '' ).title || '' )[lang] || '' ).key || '' ).current ) {
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
        } )
      )
    }
  } );

  //коллекции
  const serviceСollection = await getServiceCollection( project, lang );
  const colArr = [];

  serviceСollection.forEach( item => {
    if( ( ( ( ( item || {} ).title || {} )[lang] || {} ).key || {} ).current ) {
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
    }
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

  const blogInnersArr = blogInners.map( blogArt => (
    {
      title: ( blogArt || {} ).h1 || '',
      to: 'service',
      params: {
        project,
        lang,
        category: 'blog',
        service: ( blogArt || {} ).alias || ''
      }
    }
  ) )

  //articles
  const artArr = [];
  const reservedArticles = ['blog'];

  articles.forEach( item => {
    if( ( ( ( ( item || {} ).title || {} )[lang] || {} ).key || {} ).current && reservedArticles.indexOf( item.title[lang].key.current ) === -1  && ( ( ( item || {} ).anchor || {} )[lang] || '' ).replace( /\s/g, '' ).length === 0 ) {
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
    }
  } );

  const sitemapArr = mainArr.concat( catArr, colArr, blogArr, artArr, blogInnersArr );

  return {
    page: 'sitemapxml',
    doctype: 'xml',
    params,
    api: {
      sitemapArr,
      site
    }
  }
};

module.exports = action;
