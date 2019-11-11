const client = require( './_request' );

const query = '*[_type=="settingServiceCategory"]';
const params = {};

module.exports = async( project, lang ) => await client( project, lang )
  .fetch( query, params )
  .then( category => category );
