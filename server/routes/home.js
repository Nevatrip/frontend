'use strict';

const getServices = require( '../request/getServices' );
const getService = require( '../request/getService' );
const getNav = require( '../request/getNav' );
const getTags = require( '../request/getSettingServiceTags' );
const getServiceBasedData = require( '../request/getServiceBasedData' );
const getSettingService = require( '../request/getSettingService' );
const getSettingServicesCollections = require( '../request/getSettingServicesCollections' );
const getSettingMainBanner = require( '../request/getSettingMainBanner' );
const getSettingTopFeatures = require( '../request/getSettingTopFeatures' );
const getSettingBottomFeatures = require( '../request/getSettingBottomFeatures' );
const getSettingSocials = require( '../request/getSettingSocials' );
const getNavFooter = require( '../request/getNavFooter' );
const pathToImage = require( '../request/_imageBuilder' );

const action = async ( context, params ) => {
  const {
    lang,
    project
  } = params;

  const [
    settingTopFeatures,
    settingBottomFeatures,
    settingSocials,
    servicesFilter,
    tags,
    navigation,
    footerNavigation,
    serviceBasedData,
    settingService,
    settingServicesCollections
  ] = await Promise.all(
    [
      getSettingTopFeatures( project, lang ),
      getSettingBottomFeatures( project, lang ),
      getSettingSocials( project, lang ),
      getServices( project, lang ),
      getTags( project, lang ),
      getNav( project, lang ),
      getNavFooter( project, lang ),
      getServiceBasedData( project, lang ),
      getSettingService( project, lang ),
      getSettingServicesCollections( project, lang )
    ]
  )

  const bannerFull = await getSettingMainBanner( project, lang );
  const bannerAlias = bannerFull.alias;
  const serviceBanner = await getService( project, lang, '', bannerAlias );

  const currentLang = lang;
  const moreText = ( ( settingService || {} ).serviceViewListItemLgMore || {} )[currentLang];

  servicesFilter && servicesFilter.map( item => {
    let titleImageCropped = '';

    if( item.titleImage ) {
      if( item.titleImage.hotspot ) {
        titleImageCropped = pathToImage( item.titleImage )
          .focalPoint( item.titleImage.hotspot.x.toFixed( 2 ), item.titleImage.hotspot.y.toFixed( 2 ) )
          .fit( 'crop' )
          .width( 404 )
          .height( 277 )
          .url();
      } else if( item.titleImage ) {
        titleImageCropped = pathToImage( item.titleImage )
          .fit( 'crop' )
          .width( 404 )
          .height( 277 )
          .url();
      }
    }

    const itemParams = {
      category: ( ( ( ( item.category || {} ).title || {} )[currentLang] || {} ).key || {} ).current || '//',
      service: ( ( item.title[currentLang] || {} ).key || {} ).current || '//',
      lang,
      project
    };

    item.serviceImgUrl = titleImageCropped;
    item.mainUrl = params.urlTo( 'service', itemParams );

    return item;
  } );

  settingSocials && settingSocials.forEach( item => {
    item.img = pathToImage( item.imgSrc ).url();
  } );

  if( bannerFull.image ) {
    bannerFull.img = pathToImage( bannerFull.image ).url();
  }

  if( bannerFull.imageSm ) {
    bannerFull.imgSm = pathToImage( bannerFull.imageSm ).url();
  }

  //meta, og
  const meta = {
    title: ( ( serviceBasedData || {} ).titleMeta || {} )[lang] || '',
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
  };

  return {
    page: 'index',
    params,
    api: {
      servicesFilter,
      serviceBanner,
      navigation,
      footerNavigation,
      tags,
      serviceBasedData,
      settingService,
      settingServicesCollections,
      settingTopFeatures,
      settingBottomFeatures,
      currentLang,
      moreText,
      settingSocials,
      meta,
      bannerFull
    }
  }
};

module.exports = action;
