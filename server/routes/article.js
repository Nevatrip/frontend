'use strict';
const imageUrlBuilder = require( '@sanity/image-url' );

const getNav = require( '../request/getNav' );
const getServiceBasedData = require( '../request/getServiceBasedData' );
const getRoutes = require( '../request/getRoutesBySectionAndLang' );
const getSettingSocials = require( '../request/getSettingSocials' );
const getSettingServicesCollections = require( '../request/getSettingServicesCollections' );
const getArticleByAlias = require( '../request/getArticleByAlias' );
const getNavFooter = require( '../request/getNavFooter' );

const action = async( context, params ) => {
  const {
    lang,
    project,
    article
  } = params;

  const builder = imageUrlBuilder(
    {
      projectId: process.env[`API_ID_${ params.project.toUpperCase() }`],
      dataset: process.env[`API_DATASET_${ params.project.toUpperCase() }`]
    }
  );

  params._urlFor = source => builder.image( source );

  const routes = await getRoutes( 'article', lang, project );
  const navigation = await getNav( project, lang );
  const footerNavigation = await getNavFooter( project, lang );
  const serviceBasedData = await getServiceBasedData( project, lang );
  const settingSocials = await getSettingSocials( project, lang );
  const settingServicesCollections = await getSettingServicesCollections( project, lang );
  const articleRequest = await getArticleByAlias( project, lang, article );

  settingSocials.map( item => {
    item.img = params._urlFor( item.imgSrc ).url();
  } );

  // const servicesRandom = await getServicesRandom(lang, 9);

  if( articleRequest.length > 0 && ( ( ( articleRequest[0] || {} ).anchor || {} )[lang] || '' ).replace( /\s/g, '' ).length === 0 ) {
    if( articleRequest[0].titleImage ) {
      articleRequest[0].img = params._urlFor( articleRequest[0].titleImage.asset ).url();
    }

    //meta, og
    const meta = {
      title: ( ( ( articleRequest[0] || {} ).titleLong || {} )[lang] || '' ).name || ( ( ( articleRequest[0] || {} ).title || {} )[lang] || '' ).name || '',
      description: ( ( articleRequest[0] || {} ).descriptionMeta || {} )[lang] || ( ( articleRequest[0] || {} ).subTitle || {} )[lang] || '',
      image: params._urlFor( ( ( ( articleRequest[0] || {} ).titleImage || {} ).asset || {} )._ref || '' ).fit( 'crop' )
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
      page: 'article',
      params,
      api: {
        routes,
        navigation,
        footerNavigation,
        serviceBasedData,
        settingSocials,
        settingServicesCollections,
        meta,
        article: articleRequest
      }
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
