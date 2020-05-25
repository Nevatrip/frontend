'use strict';

const getServicesByTags = require( '../request/getServicesByTags' );
const getSettingService = require( '../request/getSettingService' );
const getServiceBasedData = require( '../request/getServiceBasedData' );
const pathToImage = require( '../request/_imageBuilder' );


const action = async ( context, params ) => {
  const {
    lang,
    project
  } = params;

  const tags = context.query.tags;

  const [
    settingService,
    services,
    serviceBasedData
  ] = await Promise.all(
    [
      getSettingService( project, lang ),
      getServicesByTags( project, lang, tags ),
      getServiceBasedData( project, lang )
    ]
  )

  const currentLang = lang;
  const moreText = ( ( settingService || {} ).serviceViewListItemLgMore || {} )[currentLang];
  const servicePriceOutside = ( ( settingService || {} ).servicePriceOutside || {} )[currentLang];
  const filterNoResult = ( ( serviceBasedData || {} ).filterNoResult || {} )[currentLang];
  const currency = ( ( serviceBasedData || {} ).currency || {} )[currentLang] || '';

  services.forEach( item => {
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
