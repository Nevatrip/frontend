const axios = require( 'axios' );

const client = ( query, cache = true, ttl = 4*60*60*1000 ) => {
  const api = process.env.REACT_APP_API_URL;
  const url = `${ api }/sanity?query=${ encodeURIComponent( query ) }&cache=${ cache }&ttl=${ ttl }`;

  return axios( url ).then( response => response.data )
};

module.exports = client;
