const axios = require( 'axios' );

const client = query => {
  const url = `https://api.test.prahatrip.cz/sanity?query=${ encodeURIComponent( query ) }`;

  console.log( 'url: ', url );

  axios( url ).then( response => {
    console.log( 'response.data: ', response.data );
    return response.data
  } )
};

module.exports = client;
