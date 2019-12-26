'use strict';
const imageUrlBuilder = require( '@sanity/image-url' );
const moment = require( 'moment' );

const getNav = require( '../request/getNav' );
const getServiceBasedData = require( '../request/getServiceBasedData' );
const getSettingService = require( '../request/getSettingService' );
const getSettingServicesCollections = require( '../request/getSettingServicesCollections' );
const getSettingSocials = require( '../request/getSettingSocials' );
const getSettingBlog = require( '../request/getSettingBlog' );
const getBlogByNumber = require( '../request/getBlogByNumber' );
const getBlogByOffset = require( '../request/getBlogByOffset' );

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

  const navigation = await getNav( project, lang );
  const serviceBasedData = await getServiceBasedData( project, lang );
  const settingService = await getSettingService( project, lang );
  const settingServicesCollections = await getSettingServicesCollections( project, lang );
  const settingSocials = await getSettingSocials( project, lang );
  const settingBlog = ( await getSettingBlog( project, lang ) )[0];
  const theLatestBlog = await getBlogByNumber( project, lang, 0 );
  const blogOffset = await getBlogByOffset( project, lang, 1, 30 );

  moment.locale( lang );

  settingSocials && settingSocials.map( item => {
    item.img = params._urlFor( item.imgSrc ).url();
  } );

  if( ( settingBlog || {} ).image ) {
    settingBlog.imageUrl = params._urlFor( settingBlog.image ).url()
  }
  if( ( settingBlog || {} ).logo ) {
    settingBlog.logoUrl = params._urlFor( settingBlog.logo ).url()
  }

  if( ( theLatestBlog || {} ).img ) {
    theLatestBlog.imgUrl = params._urlFor( theLatestBlog.img ).url()
  }
  if( ( theLatestBlog || {} ).textSrc ) {
    theLatestBlog.text = `${ theLatestBlog.textSrc.slice( 0, 400 ) }...`;
  }
  if( ( theLatestBlog || {} ).dateSrc ) {
    theLatestBlog.date = moment( theLatestBlog.dateSrc ).format( 'LL' );
  }

  blogOffset && blogOffset.map( item => {
    if( ( item || {} ).img ) {
      item.imgUrl = params._urlFor( item.img ).url()
    }
    if( ( item || {} ).textSrc ) {
      item.text = `${ item.textSrc.slice( 0, 300 ) }...`;
    }
    if( ( item || {} ).dateSrc ) {
      item.date = moment( item.dateSrc ).format( 'LL' );
    }
  } );

  const meta = {
    title: ( ( settingBlog || {} ).heading || {} )[lang] || '',
    description: ( ( settingBlog || {} ).intro || {} )[lang] || '',
    image: params._urlFor( ( settingBlog || {} ).image || '' ).fit( 'crop' )
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
    page: 'blog',
    params,
    reason: context.reason,
    api: {
      navigation,
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
