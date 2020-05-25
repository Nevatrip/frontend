'use strict';

const getServices = require( '../request/getServices' );
const getNav = require( '../request/getNav' );
const getServiceBasedData = require( '../request/getServiceBasedData' );
const getSettingService = require( '../request/getSettingService' );
const getSettingServicesCollections = require( '../request/getSettingServicesCollections' );
const getSettingSocials = require( '../request/getSettingSocials' );
const getNavFooter = require( '../request/getNavFooter' );
const pathToImage = require( '../request/_imageBuilder' );

const action = async ( context, params ) => {
  const {
    lang,
    project
  } = params;

  const [
    tours,
    navigation,
    footerNavigation,
    serviceBasedData,
    settingService,
    settingServicesCollections,
    settingSocials
  ] = await Promise.all(
    [
      getServices( project, lang ),
      getNav( project, lang ),
      getNavFooter( project, lang ),
      getServiceBasedData( project, lang ),
      getSettingService( project, lang ),
      getSettingServicesCollections( project, lang ),
      getSettingSocials( project, lang )
    ]
  )

  settingSocials && settingSocials.forEach( item => {
    item.img = pathToImage( item.imgSrc ).url();
  } );

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
  };

  //meta, og

  return {
    page: 'error',
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
      meta
    }
  }
};

module.exports = action;
