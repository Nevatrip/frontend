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


const action = async( context, params ) => {
  const {
    lang,
    project
  } = params;

  const bannerAlias = ( await getSettingMainBanner( project, lang ) )[0].alias;
  const settingTopFeatures = await getSettingTopFeatures( project, lang );
  const settingBottomFeatures = await getSettingBottomFeatures( project, lang );

  const servicesFilter = await getServices( project, lang );
  const serviceBanner = await getService( project, lang, '', bannerAlias );

  const navigation = await getNav( project, lang );
  const tags = await getTags( project, lang );
  const serviceBasedData = await getServiceBasedData( project, lang );
  const settingService = await getSettingService( project, lang );
  const settingServicesCollections = await getSettingServicesCollections( project, lang );

  return {
    page: 'index',
    params,
    api: {
      servicesFilter,
      serviceBanner,
      navigation,
      tags,
      serviceBasedData,
      settingService,
      settingServicesCollections,
      settingTopFeatures,
      settingBottomFeatures
    }
  }
};

module.exports = action;
