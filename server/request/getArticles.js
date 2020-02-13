const client = require( './_request' );

const query = '*[_type=="page"]';
const params = {};

module.exports = async( project, lang ) => await client( project, lang )
  .fetch( query, params )
  .then( article => article );
