'use strict';
const imageUrlBuilder = require( '@sanity/image-url' );

const getServices = require( '../request/getServices' );
const getNav = require( '../request/getNav' );
const getServiceBasedData = require( '../request/getServiceBasedData' );
const getSettingService = require( '../request/getSettingService' );
const getSettingServicesCollections = require( '../request/getSettingServicesCollections' );
const getSettingSocials = require( '../request/getSettingSocials' );

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

  settingSocials && settingSocials.map( item => {
    item.img = params._urlFor( item.imgSrc ).url();
  } );

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
    page: 'cart',
    params,
    reason: context.reason,
    api: {
      tours,
      navigation,
      serviceBasedData,
      settingServicesCollections,
      settingService,
      settingSocials,
      meta
    }
  }
};

module.exports = action;
