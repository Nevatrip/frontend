'use strict';
const imageUrlBuilder = require( '@sanity/image-url' );

const getNav = require( '../request/getNav' );
const getServiceBasedData = require( '../request/getServiceBasedData' );
const getRoutes = require( '../request/getRoutesBySectionAndLang' );
const getSettingSocials = require( '../request/getSettingSocials' );
const getSettingServicesCollections = require( '../request/getSettingServicesCollections' );
const getSettingService = require( '../request/getSettingService' );
const getServicesByCategory = require( '../request/getServicesByCategory' );

//sitemap
const getServiceCategory = require( '../request/getServiceCategory' );

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
  const serviceBasedData = await getServiceBasedData( project, lang );
  const settingSocials = await getSettingSocials( project, lang );
  const settingServicesCollections = await getSettingServicesCollections( project, lang );
  const settingService = await getSettingService( project, lang );
  const sitemapArr = [
    {
      title: ( settingService.serviceMainPage || {} )[lang] || '',
      to: 'index'
    }
  ];
  const serviceCategory = await getServiceCategory( project, lang );

  // const catArr = [];
  // serviceCategory.map( item =>
  //   catArr.push(
  //     {
  //       title: item.title[lang].name,
  //       to: 'servicesByCategory',
  //       params: {
  //         category: item.title[lang].key.current
  //       },
  //       inner: ( async() => {
  //         await getServicesByCategory( project, lang, item.title[lang].key.current )
  //       } )()
  //     }
  //   )
  // );

  const catArr = [];
  const functionWithPromise = item =>
    Promise.resolve(
      catArr.push(
        {
          title: item.title[lang].name,
          to: 'servicesByCategory',
          params: {
            category: item.title[lang].key.current
          },
          inner: ( async() => {
            await getServicesByCategory( project, lang, item.title[lang].key.current )
          } )()
        }
      )
    );


  const anAsyncFunction = async item => functionWithPromise( item );
  const getData = async() => Promise.all( serviceCategory.map( item => anAsyncFunction( item ) ) );

  getData().then( data => {
    console.log( data )
  } );

  console.log( '∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞' );
  console.log( 'catArr: ', catArr );
  
  console.log( 'ˆˆˆˆˆˆˆˆˆˆˆˆˆˆˆˆˆˆˆˆˆˆˆˆˆˆˆˆˆˆˆˆˆˆˆˆˆˆˆˆ' );

  //+getCategory

  //servicesInCategory

  //getCollections

  //blog

  //blog articles

  //articles


  settingSocials.map( item => {
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
  }

  return {
    page: 'sitemap',
    params,
    api: {
      routes,
      navigation,
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
