const client = require( './_request' );

const query = '*[_type=="settingService"]{...}';
const params = {};

module.exports = async( project, lang ) => await client( project, lang )
  .fetch( query, params )
  .then( settingService => settingService[0] );
