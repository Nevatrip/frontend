'use strict';
const imageUrlBuilder = require( '@sanity/image-url' );
const moment = require( 'moment' );

const getServices = require( '../request/getServices' );
const getNav = require( '../request/getNav' );
const getServicesRandom = require( '../request/getServicesRandomByCategoryExcludeID' );
const getServiceBasedData = require( '../request/getServiceBasedData' );
const getSettingService = require( '../request/getSettingService' );
const getSettingServicesCollections = require( '../request/getSettingServicesCollections' );
const getSettingSocials = require( '../request/getSettingSocials' );
const getSettingBlog = require( '../request/getSettingBlog' );
const getBlogByOffset = require( '../request/getBlogByOffset' );
const getBlogByAlias = require( '../request/getBlogByAlias' );
const getNumberRandomBlogs = require( '../request/getNumberRandomBlogs' );

const action = async( context, params ) => {
  const {
    blogDetail,
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

  const servicesRandom = await getServicesRandom( project, lang );

  const serviceBasedData = await getServiceBasedData( project, lang );
  const settingService = await getSettingService( project, lang );
  const settingServicesCollections = await getSettingServicesCollections( project, lang );
  const settingSocials = await getSettingSocials( project, lang );
  const settingBlog = ( await getSettingBlog( project, lang ) )[0];
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

  const blogResponse = await getBlogByAlias( project, lang, blogDetail );
  const excludeAlias = blogResponse[0].title[lang].key.current;
  const tenRandomBlogs = await getNumberRandomBlogs( project, lang, 10, excludeAlias );

  if( blogResponse.length ) {
    if( ( blogResponse[0] || {} ).titleImage ) {
      blogResponse[0].imgUrl = params._urlFor( blogResponse[0].titleImage ).url()
    }

    //meta, og
    const meta = {
      title: ( ( ( blogResponse[0] || {} ).titleLong || {} )[lang] || '' ).name || ( ( ( blogResponse[0] || {} ).title || {} )[lang] || '' ).name || '',
      description: ( ( blogResponse[0] || {} ).descriptionMeta || {} )[lang] || '',
      image: params._urlFor( ( blogResponse[0] || {} ).titleImage || '' ).fit( 'crop' )
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
      page: 'blogDetail',
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
        blogOffset,
        blog: blogResponse[0],
        tenRandomBlogs,
        meta
      }
    }
  }

  //meta, og
  const meta = {
    title: ( ( serviceBasedData || {} ).title || {} )[lang] || '',
    description: ( ( serviceBasedData || {} ).shortDescription || {} )[lang] || '',
    image: params._urlFor( ( ( ( serviceBasedData || {} ).favicon || {} ).asset || {} )._ref || '' ).fit( 'crop' )
      .width( 280 )
      .height( 280 )
      .url() || '',
    type: 'website',
    url: ( ( serviceBasedData || {} ).langSiteLink || {} )[lang],
    width: '280',
    height: '280',
    card: 'summary'
  }

  return {
    page: 'error',
    params,
    reason: context.reason,
    api: {
      tours,
      navigation,
      servicesRandom,
      serviceBasedData,
      settingService,
      settingServicesCollections,
      settingSocials,
      meta
    }
  }
};

module.exports = action;
