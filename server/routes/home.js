'use strict';

const getServices = require( '../request/getServices' );
const getService = require( '../request/getService' );
const getNav = require( '../request/getNav' );
const getTags = require( '../request/getSettingServiceTags' );
const getServiceBasedData = require( '../request/getServiceBasedData' );
const getSettingService = require( '../request/getSettingService' );
const getSettingServicesCollections = require( '../request/getSettingServicesCollections' );
const getSettingMainBanner = require( '../request/getSettingMainBanner' );


const action = async( context, params ) => {
  const lang = params.lang;
  const bannerAlias = ( await getSettingMainBanner( lang ) )[0].alias;


  const servicesFilter = await getServices();
  const serviceBanner = await getService( bannerAlias, lang );

  const navigation = await getNav( lang );
  const tags = await getTags();
  const serviceBasedData = await getServiceBasedData();
  const settingService = await getSettingService();
  const settingServicesCollections = await getSettingServicesCollections();

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
      settingServicesCollections
    }
  }
};

module.exports = action;
