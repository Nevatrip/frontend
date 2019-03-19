'use strict';

const axios = require('axios');

const getServices = require( '../request/getServices' );
const getNav = require( '../request/getNav' );
const getServiceBasedData = require( '../request/getServiceBasedData' );
const getSettingService = require( '../request/getSettingService' );
const getSettingServicesCollections = require( '../request/getSettingServicesCollections' );

const action = async( {body, sessionID}, params ) => {
  switch ( body && body.action ) {
    case 'add':
      console.log( 'sessionID: ', sessionID );
      await axios.put(`http://api.nevatrip.ru/shoppingCarts/${ sessionID }`, {
        "sessionId": sessionID,
        "created": new Date().toISOString(),
        "lastUpdated": new Date().toISOString(),
        "items": [
          {
            "serviceId": body.serviceId,
            "options": {}
          }
        ]
      } )
      break;
    default: break;
  }

  const lang = params.lang;

  const tours = await getServices();
  const navigation = await getNav( lang );
  const serviceBasedData = await getServiceBasedData();
  const settingService = await getSettingService();
  const settingServicesCollections = await getSettingServicesCollections();

  return {
    page: 'cart',
    params,
    api: {
      sessionID,
      tours,
      navigation,
      serviceBasedData,
      settingServicesCollections,
      settingService
    }
  }
};

module.exports = action;
