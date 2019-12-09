'use strict';
const imageUrlBuilder = require( '@sanity/image-url' );

const getServices = require( '../request/getServices' );
const getNav = require( '../request/getNav' );
const getServiceBasedData = require( '../request/getServiceBasedData' );
const getSettingService = require( '../request/getSettingService' );
const getSettingServicesCollections = require( '../request/getSettingServicesCollections' );
const getSettingSocials = require( '../request/getSettingSocials' );
const getSettingBlog = require( '../request/getSettingBlog' );
const getBlogByNumber = require( '../request/getBlogByNumber' );

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

  const tours = await getServices( project, lang );
  const navigation = await getNav( project, lang );
  const serviceBasedData = await getServiceBasedData( project, lang );
  const settingService = await getSettingService( project, lang );
  const settingServicesCollections = await getSettingServicesCollections( project, lang );
  const settingSocials = await getSettingSocials( project, lang );
  const settingBlog = ( await getSettingBlog( project, lang ) )[0];
  const theLatestBlog = await getBlogByNumber( project, lang, 0 );

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

  return {
    page: 'blog',
    params,
    reason: context.reason,
    api: {
      tours,
      navigation,
      serviceBasedData,
      settingServicesCollections,
      settingService,
      settingSocials,
      settingBlog,
      theLatestBlog
    }
  }
};

module.exports = action;
