'use strict';
const moment = require( 'moment' );

const getNav = require( '../request/getNav' );
const getServiceBasedData = require( '../request/getServiceBasedData' );
const getSettingService = require( '../request/getSettingService' );
const getSettingServicesCollections = require( '../request/getSettingServicesCollections' );
const getSettingSocials = require( '../request/getSettingSocials' );
const getSettingBlog = require( '../request/getSettingBlog' );
const getBlogByNumber = require( '../request/getBlogByNumber' );
const getBlogByOffset = require( '../request/getBlogByOffset' );
const getNavFooter = require( '../request/getNavFooter' );
const pathToImage = require( '../request/_imageBuilder' );

const action = async ( context, params ) => {
  const {
    lang,
    project
  } = params;

  const [
    navigation,
    footerNavigation,
    serviceBasedData,
    settingService,
    settingServicesCollections,
    settingSocials,
    settingBlog,
    theLatestBlog,
    blogOffset
  ] = await Promise.all(
    [
      getNav( project, lang ),
      getNavFooter( project, lang ),
      getServiceBasedData( project, lang ),
      getSettingService( project, lang ),
      getSettingServicesCollections( project, lang ),
      getSettingSocials( project, lang ),
      getSettingBlog( project, lang ),
      getBlogByNumber( project, lang, 0 ),
      getBlogByOffset( project, lang, 1, 30 )
    ]
  );

  moment.locale( lang );

  settingSocials && settingSocials.forEach( item => {
    item.img = pathToImage( item.imgSrc ).url();
  } );

  if( ( settingBlog || {} ).image ) {
    settingBlog.imageUrl = pathToImage( settingBlog.image ).url()
  }
  if( ( settingBlog || {} ).logo ) {
    settingBlog.logoUrl = pathToImage( settingBlog.logo ).url()
  }

  if( ( theLatestBlog || {} ).img ) {
    theLatestBlog.imgUrl = pathToImage( theLatestBlog.img ).url()
  }
  if( ( theLatestBlog || {} ).textSrc ) {
    theLatestBlog.text = `${ theLatestBlog.textSrc.slice( 0, 400 ) }...`;
  }
  if( ( theLatestBlog || {} ).dateSrc || ( theLatestBlog || {} ).realDate ) {
    theLatestBlog.date = moment( theLatestBlog.dateSrc || ( theLatestBlog || {} ).realDate ).format( 'LL' );
  }

  blogOffset && blogOffset.forEach( item => {
    if( ( item || {} ).img ) {
      item.imgUrl = pathToImage( item.img ).url()
    }
    if( ( item || {} ).textSrc ) {
      item.text = `${ item.textSrc.slice( 0, 300 ) }...`;
    }
    if( ( item || {} ).dateSrc || ( item || {} ).realDate ) {
      item.date = moment( item.dateSrc || ( item || {} ).realDate ).format( 'LL' );
    }
  } );

  const meta = {
    title: ( ( settingBlog || {} ).heading || {} )[lang] || '',
    description: ( ( settingBlog || {} ).intro || {} )[lang] || '',
    image: pathToImage( ( settingBlog || {} ).image || '' ).fit( 'crop' )
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
    page: 'blog',
    params,
    reason: context.reason,
    api: {
      navigation,
      footerNavigation,
      serviceBasedData,
      settingServicesCollections,
      settingService,
      settingSocials,
      settingBlog,
      theLatestBlog,
      blogOffset,
      meta
    }
  }
};

module.exports = action;
