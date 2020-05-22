'use strict';

const getNav = require( '../request/getNav' );
const getServiceBasedData = require( '../request/getServiceBasedData' );
const getRoutes = require( '../request/getRoutesBySectionAndLang' );
const getSettingSocials = require( '../request/getSettingSocials' );
const getSettingServicesCollections = require( '../request/getSettingServicesCollections' );
const getSettingService = require( '../request/getSettingService' );
const getServicesByCategory = require( '../request/getServicesByCategory' );
const getServiceCategory = require( '../request/getServiceCategory' );
const getServiceCollection = require( '../request/getSettingServicesCollections' );
const getSettingBlog = require( '../request/getSettingBlog' );
const getBlogArticles = require( '../request/getBlogArticles' );
const getArticles = require( '../request/getArticles' );
const getNavFooter = require( '../request/getNavFooter' );
const pathToImage = require( '../request/_imageBuilder' );

const asyncForEach = async( array, callback ) => {
  for( let index = 0; index < array.length; index++ ) {
    await callback( array[index], index, array )
  }
};

const action = async ( context, params ) => {
  const {
    lang,
    project
  } = params;

  const [
    routes,
    navigation,
    footerNavigation,
    serviceBasedData,
    settingSocials,
    settingServicesCollections,
    settingService,
    articles,
    settingBlog
  ] = await Promise.all(
    [
      getRoutes( 'sitemap', lang, project ),
      getNav( project, lang ),
      getNavFooter( project, lang ),
      getServiceBasedData( project, lang ),
      getSettingSocials( project, lang ),
      getSettingServicesCollections( project, lang ),
      getSettingService( project, lang ),
      getArticles( project, lang ),
      getSettingBlog( project, lang )
    ]
  )

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
    if( ( ( ( ( item || '' ).title || '' )[lang] || '' ).key || '' ).current ) {
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
    }
  } );

  //коллекции
  const serviceСollection = await getServiceCollection( project, lang );
  const colArr = [];

  serviceСollection.forEach( item => {
    if( ( ( ( ( item || {} ).title || {} )[lang] || {} ).key || {} ).current ) {
      colArr.push(
        {
          title: ( ( ( item || {} ).title || {} )[lang] || {} ).name || '',
          to: 'servicesByCollection',
          params: {
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
      title: ( ( settingBlog || {} ).heading || {} )[lang] || '',
      to: 'blog',
      inner: blogInners.map( blogArt => (
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
    }
  );

  //articles
  const artArr = [];
  const reservedArticles = ['blog'];

  articles.forEach( item => {
    if( ( ( ( ( ( item || {} ).title || {} )[lang] || {} ).key || {} ).current && reservedArticles.indexOf( item.title[lang].key.current ) === -1 ) && ( ( ( item || {} ).anchor || {} )[lang] || '' ).replace( /\s/g, '' ).length === 0 ) {
      artArr.push(
        {
          title: item.title[lang].name || '',
          to: 'article',
          params: {
            article: item.title[lang].key.current
          }
        }
      )
    }
  } );

  const sitemapArr = mainArr.concat( catArr, colArr, blogArr, artArr );

  settingSocials.forEach( item => {
    item.img = pathToImage( item.imgSrc ).url();
  } );

  const sitemapImg = pathToImage( ( ( serviceBasedData.sitemap || {} ).sitemapImage || {} ).asset ).url();

  //meta, og
  const meta = {
    title: ( ( ( serviceBasedData || {} ).sitemap || {} ).sitemapTitle || {} )[lang] || '',
    description: ( ( serviceBasedData || {} ).shortDescription || {} )[lang] || '',
    image: pathToImage( ( ( ( serviceBasedData.sitemap || {} ).sitemapImage || {} ).asset || {} )._ref || '' ).fit( 'crop' )
      .width( 1200 )
      .height( 620 )
      .url() || '',
    type: 'website',
    url: ( ( serviceBasedData || {} ).langSiteLink || {} )[lang],
    width: '1200',
    height: '620',
    card: 'summary_large_image'
  };

  return {
    page: 'sitemap',
    params,
    api: {
      routes,
      navigation,
      footerNavigation,
      serviceBasedData,
      settingSocials,
      settingServicesCollections,
      meta,
      sitemapImg,
      settingService,
      sitemapArr
    }
  }
};

module.exports = action;
