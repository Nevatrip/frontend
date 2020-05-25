'use strict';

const getServices = require( '../request/getServices' );
const getService = require( '../request/getService' );
const getNav = require( '../request/getNav' );
const getServicesRandom = require( '../request/getServicesRandomByCategoryExcludeID' );
const getServiceBasedData = require( '../request/getServiceBasedData' );
const getSettingService = require( '../request/getSettingService' );
const getSettingServicesCollections = require( '../request/getSettingServicesCollections' );
const getServiceCategoryByServiceAlias = require( '../request/getServiceCategoryByServiceAlias' );
const getSettingSocials = require( '../request/getSettingSocials' );
const getNavFooter = require( '../request/getNavFooter' );
const pathToImage = require( '../request/_imageBuilder' );

const action = async ( context, params ) => {
  const {
    service,
    lang,
    project,
    category
  } = params;

  const tours = await getServices( project, lang );

  const [
    navigation,
    footerNavigation,
    serviceBasedData,
    settingService,
    settingServicesCollections,
    settingSocials
  ] = await Promise.all(
    [
      getNav( project, lang ),
      getNavFooter( project, lang ),
      getServiceBasedData( project, lang ),
      getSettingService( project, lang ),
      getSettingServicesCollections( project, lang ),
      getSettingSocials( project, lang )
    ]
  )

  const categoryName = ( ( ( ( ( await getServiceCategoryByServiceAlias( project, lang, service ) || {} ).category || {} ).title || {} )[params.lang] || {} ).key || {} ).current;
  const serviceResponse = await getService( project, lang, categoryName, service );
  const excludeID = ( serviceResponse || {} )._id;
  const servicesRandom = await ( categoryName ? getServicesRandom( project, lang, categoryName, excludeID ) : getServicesRandom( project, lang, category ) );

  settingSocials && settingSocials.forEach( item => {
    item.img = pathToImage( item.imgSrc ).url();
  } );

  if( serviceResponse ) {
    //meta, og
    const meta = {
      title: ( ( ( serviceResponse || {} ).titleLong || {} )[lang] || '' ).name || ( ( ( serviceResponse || {} ).title || {} )[lang] || '' ).name || '',
      description: ( ( serviceResponse || {} ).descriptionMeta || {} )[lang] || '',
      image: pathToImage( ( serviceResponse || {} ).titleImage || '' ).fit( 'crop' )
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
      page: 'service',
      params,
      api: {
        tours,
        service: serviceResponse,
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
  };

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
