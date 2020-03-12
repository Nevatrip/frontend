'use strict';
const imageUrlBuilder = require( '@sanity/image-url' );

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

const action = async( context, params ) => {
  const {
    service,
    lang,
    project,
    category
  } = params;

  const builder = imageUrlBuilder(
    {
      projectId: process.env[`API_ID_${ params.project.toUpperCase() }`],
      dataset: process.env[`API_DATASET_${ params.project.toUpperCase() }`]
    }
  );

  params._urlFor = source => builder.image( source );

  const tours = await getServices( project, lang );

  const categoryName = ( ( ( ( ( await getServiceCategoryByServiceAlias( project, lang, service ) || {} ).category || {} ).title || {} )[params.lang] || {} ).key || {} ).current;
  const serviceResponse = await getService( project, lang, categoryName, service );
  const navigation = await getNav( project, lang );
  const footerNavigation = await getNavFooter( project, lang );
  const excludeID = ( serviceResponse || {} )._id;
  const servicesRandom = await ( categoryName ? getServicesRandom( project, lang, categoryName, excludeID ) : getServicesRandom( project, lang, category ) );
  const serviceBasedData = await getServiceBasedData( project, lang );
  const settingService = await getSettingService( project, lang );
  const settingServicesCollections = await getSettingServicesCollections( project, lang );
  const settingSocials = await getSettingSocials( project, lang );

  settingSocials && settingSocials.map( item => {
    item.img = params._urlFor( item.imgSrc ).url();
  } );

  if( serviceResponse ) {
    //meta, og
    const meta = {
      title: ( ( ( serviceResponse || {} ).titleLong || {} )[lang] || '' ).name || ( ( ( serviceResponse || {} ).title || {} )[lang] || '' ).name || '',
      description: ( ( serviceResponse || {} ).descriptionMeta || {} )[lang] || '',
      image: params._urlFor( ( serviceResponse || {} ).titleImage || '' ).fit( 'crop' )
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
      page: 'service',
      params,
      api: {
        tours,
        service: serviceResponse,
        navigation,
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
