const client = require( './_request' );

const query = '*[_type=="serviceBasedData"]{...}';
const params = {};

module.exports = async( project, lang ) => await client( project, lang )
  .fetch( query, params )
  .then( serviceBasedData => serviceBasedData[0] );
