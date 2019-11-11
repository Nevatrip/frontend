const client = require( './_request' );

const query = ( lang, num ) => `*[_type == "tour"][0..${ num }]{title.${ lang }, titleImage}|order(_createdAt asc)`;

const params = {};

module.exports = async( project, lang, num ) => await client( project )
  .fetch( query( lang, num ), params )
  .then( servicesRandom => servicesRandom );
