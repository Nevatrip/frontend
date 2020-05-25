'use strict';
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
const getNavFooter = require( '../request/getNavFooter' );
const pathToImage = require( '../request/_imageBuilder' );

const action = async ( context, params ) => {
  const {
    blogDetail,
    lang,
    project
  } = params;

  const [
    tours,
    navigation,
    footerNavigation,
    servicesRandom,
    serviceBasedData,
    settingService,
    settingServicesCollections,
    settingSocials,
    settingBlog,
    blogOffset
  ] = await Promise.all(
    [
      getServices( project, lang ),
      getNav( project, lang ),
      getNavFooter( project, lang ),
      getServicesRandom( project, lang ),
      getServiceBasedData( project, lang ),
      getSettingService( project, lang ),
      getSettingServicesCollections( project, lang ),
      getSettingSocials( project, lang ),
      getSettingBlog( project, lang ),
      getBlogByOffset( project, lang, 1, 30 )
    ]
  )

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

  blogOffset && blogOffset.forEach( item => {
    if( ( item || {} ).img ) {
      item.imgUrl = pathToImage( item.img ).url()
    }
    if( ( item || {} ).textSrc ) {
      item.text = `${ item.textSrc.slice( 0, 300 ) }...`;
    }
    if( ( item || {} ).dateSrc || ( item || {} ).realDate ) {
      item.date = moment( item.dateSrc || item.realDate ).format( 'LL' );
    }
  } );

  const blogResponse = await getBlogByAlias( project, lang, blogDetail );
  const excludeAlias = blogResponse[0].title[lang].key.current;
  const tenRandomBlogs = await getNumberRandomBlogs( project, lang, 10, excludeAlias );

  if( blogResponse.length ) {
    if( ( blogResponse[0] || {} ).titleImage ) {
      blogResponse[0].imgUrl = pathToImage( blogResponse[0].titleImage ).url()
    }

    //meta, og
    const meta = {
      title: ( ( ( blogResponse[0] || {} ).titleLong || {} )[lang] || '' ).name || ( ( ( blogResponse[0] || {} ).title || {} )[lang] || '' ).name || '',
      description: ( ( blogResponse[0] || {} ).descriptionMeta || {} )[lang] || '',
      image: pathToImage( ( blogResponse[0] || {} ).titleImage || '' ).fit( 'crop' )
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
        footerNavigation,
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
    image: pathToImage( ( ( ( serviceBasedData || {} ).favicon || {} ).asset || {} )._ref || '' ).fit( 'crop' )
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
      footerNavigation,
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
