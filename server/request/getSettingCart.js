const client = require( './_request' );

const query = '*[_type=="settingCart"]{...}';
const params = {};

module.exports = async( project, lang ) => await client( project, lang )
  .fetch( query, params )
  .then( settingCart => settingCart[0] );
