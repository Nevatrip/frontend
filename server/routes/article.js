'use strict';

const getNav = require( '../request/getNav' );
const getServiceBasedData = require( '../request/getServiceBasedData' );
const getRoutes = require( '../request/getRoutesBySectionAndLang' );
const getSettingSocials = require( '../request/getSettingSocials' );
const getSettingServicesCollections = require( '../request/getSettingServicesCollections' );
const getArticleByAlias = require( '../request/getArticleByAlias' );
const getNavFooter = require( '../request/getNavFooter' );
const pathToImage = require( '../request/_imageBuilder' );

const action = async ( context, params ) => {
  const {
    lang,
    project,
    article
  } = params;

  const [
    routes,
    navigation,
    footerNavigation,
    serviceBasedData,
    settingSocials,
    settingServicesCollections,
    articleRequest
  ] = await Promise.all(
    [
      getRoutes( 'article', lang, project ),
      getNav( project, lang ),
      getNavFooter( project, lang ),
      getServiceBasedData( project, lang ),
      getSettingSocials( project, lang ),
      getSettingServicesCollections( project, lang ),
      getArticleByAlias( project, lang, article )
    ]
  );

  settingSocials.forEach( item => {
    item.img = pathToImage( item.imgSrc ).url();
  } );

  if( articleRequest.length > 0 && ( ( ( articleRequest[0] || {} ).anchor || {} )[lang] || '' ).replace( /\s/g, '' ).length === 0 ) {
    if( articleRequest[0].titleImage ) {
      articleRequest[0].img = pathToImage( articleRequest[0].titleImage.asset ).url();
    }

    //meta, og
    const meta = {
      title: ( ( ( articleRequest[0] || {} ).titleLong || {} )[lang] || '' ).name || ( ( ( articleRequest[0] || {} ).title || {} )[lang] || '' ).name || '',
      description: ( ( articleRequest[0] || {} ).descriptionMeta || {} )[lang] || ( ( articleRequest[0] || {} ).subTitle || {} )[lang] || '',
      image: pathToImage( ( ( ( articleRequest[0] || {} ).titleImage || {} ).asset || {} )._ref || '' ).fit( 'crop' )
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
};

module.exports = action;
