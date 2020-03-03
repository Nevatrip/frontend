'use strict';
const imageUrlBuilder = require( '@sanity/image-url' );

const getServicesByTags = require( '../request/getServicesByTags' );
const getSettingService = require( '../request/getSettingService' );
const getServiceBasedData = require( '../request/getServiceBasedData' );

const action = async( context, params ) => {
  const {
    lang,
    project
  } = params;

  const tags = context.query.tags;
  const settingService = await getSettingService( project, lang );
  const services = await getServicesByTags( project, lang, tags );
  const serviceBasedData = await getServiceBasedData( project, lang );
  const currentLang = lang;
  const moreText = ( ( settingService || {} ).serviceViewListItemLgMore || {} )[currentLang];
  const servicePriceOutside = ( ( settingService || {} ).servicePriceOutside || {} )[currentLang];
  const filterNoResult = ( ( serviceBasedData || {} ).filterNoResult || {} )[currentLang];
  const currency = ( ( serviceBasedData || {} ).currency || {} )[currentLang] || '';

  const builder = imageUrlBuilder(
    {
      projectId: process.env[`API_ID_${ params.project.toUpperCase() }`],
      dataset: process.env[`API_DATASET_${ params.project.toUpperCase() }`]
    }
  );

  params._urlFor = source => builder.image( source );

  services.map( item => {
    let titleImageCropped = '';

    params._urlFor = source => builder.image( source );
    if( item.titleImage ) {
      if( item.titleImage.hotspot ) {
        titleImageCropped = params._urlFor( item.titleImage )
          .focalPoint( item.titleImage.hotspot.x.toFixed( 2 ), item.titleImage.hotspot.y.toFixed( 2 ) )
          .fit( 'crop' )
          .width( 404 )
          .height( 277 )
          .url();
      } else if( item.titleImage ) {
        titleImageCropped = params._urlFor( item.titleImage )
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
    }

    item.serviceImgUrl = titleImageCropped;
    item.mainUrl = params.urlTo( 'service', itemParams );

    return item;
  } );

  return {
    currentLang,
    services,
    moreText,
    servicePriceOutside,
    filterNoResult,
    currency
  };
};

module.exports = action;
