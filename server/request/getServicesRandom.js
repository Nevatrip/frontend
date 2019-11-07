const client = require( './_request' );

const query = ( lang, num ) => `*[_type == "tour"][0..${ num }]{title.${ lang }, titleImage}|order(_createdAt asc)`;

const params = {};

module.exports = async( lang, num ) => await client().fetch( query( lang, num ), params ).then( servicesRandom => servicesRandom );
