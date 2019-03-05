const client = require( './_request' );

const query = '*[_type=="settingServiceTag"]';
const params = {};

module.exports = async() => await client.fetch( query, params ).then( tags =>

// console.log(tags);
  tags
)
