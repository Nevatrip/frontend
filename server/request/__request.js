const axios = require( 'axios' );

const client = ( query, cache = true, ttl = 4*60*60*1000 ) => {
  const url = `https://api.prahatrip.cz/sanity?query=${ encodeURIComponent( query ) }&cache=${ cache }&ttl=${ ttl }`;

  //console.log( 'url: ', url );

  return axios( url ).then( response => {
    //console.log( 'response.data: ', response.data );
    return response.data
  } )
};

module.exports = client;
