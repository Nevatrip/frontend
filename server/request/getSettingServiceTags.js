const client = require( './_request' );

const query = '*[_type=="settingServiceTag"]';
const params = {};

module.exports = async( project, lang ) => await client( project, lang )
  .fetch( query, params )
  .then( tags => tags );
