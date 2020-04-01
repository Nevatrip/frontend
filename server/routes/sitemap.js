'use strict';
const imageUrlBuilder = require( '@sanity/image-url' );

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

const asyncForEach = async( array, callback ) => {
  for( let index = 0; index < array.length; index++ ) {
    await callback( array[index], index, array )
  }
};

const action = async( context, params ) => {
  const {
    lang,
    project
  } = params;

  const builder = imageUrlBuilder(
    {
      projectId: process.env[`API_ID_${ params.project.toUpperCase() }`],
      dataset: process.env[`API_DATASET_${ params.project.toUpperCase() }`]
    }
  );

  params._urlFor = source => builder.image( source );

  const routes = await getRoutes( 'sitemap', lang, project );
  const navigation = await getNav( project, lang );
  const footerNavigation = await getNavFooter( project, lang );
  const serviceBasedData = await getServiceBasedData( project, lang );
  const settingSocials = await getSettingSocials( project, lang );
  const settingServicesCollections = await getSettingServicesCollections( project, lang );
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
    if( ( ( ( ( item || '' ).title || '' )[lang] || '' ).key || '' ).current ) {
      const inners = await getServicesByCategory(project, lang, ((((item || {}).title || {})[lang] || {}).key || {}).current);

      catArr.push(
        {
          title: (((item || '').title || '')[lang] || '').name || '',
          to: 'servicesByCategory',
          params: {
            category: ((((item || '').title || '')[lang] || '').key || '').current || ''
          },
          inner: inners.map(serv => (
            {
              title: (((serv || {}).title || {})[lang] || {}).name || '',
              to: 'service',
              params: {
                category: ((((item || {}).title || {})[lang] || {}).key || {}).current || '',
                service: ((((serv || {}).title || {})[lang] || {}).key || {}).current || ''
              }
            }
          ))
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
          title: (((item || {}).title || {})[lang] || {}).name || '',
          to: 'servicesByCollection',
          params: {
            collection: ((((item || {}).title || {})[lang] || {}).key || {}).current || ''
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
    if( ( ( ( ( item || {} ).title || {} )[lang] || {} ).key || {} ).current ) {
      artArr.push(
        {
          title: (((item || {}).title || {})[lang] || {}).name || '',
          to: 'article',
          params: {
            article: ((((item || {}).title || {})[lang] || {}).key || {}).current || ''
          }
        }
      )
    }
  } );

  const sitemapArr = mainArr.concat( catArr, colArr, blogArr, artArr );

  settingSocials.forEach( item => {
    item.img = params._urlFor( item.imgSrc ).url();
  } );

  // const servicesRandom = await getServicesRandom(lang, 9);

  const sitemapImg = params._urlFor( ( ( serviceBasedData.sitemap || {} ).sitemapImage || {} ).asset ).url();

  //meta, og
  const meta = {
    title: ( ( ( serviceBasedData || {} ).sitemap || {} ).sitemapTitle || {} )[lang] || '',
    description: ( ( serviceBasedData || {} ).shortDescription || {} )[lang] || '',
    image: params._urlFor( ( ( ( serviceBasedData.sitemap || {} ).sitemapImage || {} ).asset || {} )._ref || '' ).fit( 'crop' )
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

  //meta, og
  // const meta = {
  //   title: ( ( serviceBasedData || {} ).title || {} )[lang] || '',
  //   description: ( ( serviceBasedData || {} ).shortDescription || {} )[lang] || '',
  //   image: params._urlFor( ( ( ( serviceBasedData || {} ).favicon || {} ).asset || {} )._ref || '' ).fit( 'crop' )
  //     .width( 280 )
  //     .height( 280 )
  //     .url() || '',
  //   type: 'website',
  //   url: ( ( serviceBasedData || {} ).langSiteLink || {} )[lang],
  //   width: '280',
  //   height: '280',
  //   card: 'summary'
  // }

  // return {
  //   page: 'error',
  //   params,
  //   reason: context.reason,
  //   api: {
  //     navigation,
  //     serviceBasedData,
  //     settingSocials,
  //     settingServicesCollections,
  //     meta
  //
  //     // servicesRandom,
  //   }
  // }
};

module.exports = action;
