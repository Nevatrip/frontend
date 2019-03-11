const client = require( './_request' );

const query = '*[_type=="settingServiceCategory"]';
const params = {};

module.exports = async() => await client.fetch( query, params ).then( category =>
  category
);
