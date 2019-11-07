const client = require( './_request' );

const query = '*[_type=="settingService"]{...}';
const params = {};

module.exports = async() => await client().fetch( query, params ).then( settingService =>

// console.log(settingService[0]);
  settingService[0]
)
