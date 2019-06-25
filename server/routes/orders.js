'use strict';

const getOrders = require( '../request/getOrders' );
const getServiceBasedData = require( '../request/getServiceBasedData' );
const getNav = require( '../request/getNav' );
const getSettingServicesCollections = require( '../request/getSettingServicesCollections' );

const action = async( context, params ) => {
  const { lang } = params;

  const request = await Promise.all( [
    getOrders(),
    getServiceBasedData(),
    getNav( lang ),
    getSettingServicesCollections(),
  ] );

  const [
    orders,
    serviceBasedData,
    navigation,
    settingServicesCollections
  ] = request;

  return {
    page: 'orders',
    params,
    api: {
      orders,
      serviceBasedData,
      navigation,
      settingServicesCollections
    }
  };
};

module.exports = action;
