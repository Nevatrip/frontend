const axios = require( 'axios' );

const client = ( query, cache = false, ttl = 4*60*60*1000 ) => {
  const url = `${ process.env.API_URL }/sanity?query=${ encodeURIComponent( query ) }&cache=${ cache }&ttl=${ ttl }`;

  //console.log( 'url: ', url );

  return axios( url ).then( response => {
    //console.log( 'response.data: ', response.data );
    return response.data
  } )
};

module.exports = client;
