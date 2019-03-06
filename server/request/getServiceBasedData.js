const client = require( './_request' );

const query = '*[_type=="serviceBasedData"]{...}';
const params = {};

module.exports = async() => await client.fetch( query, params ).then( serviceBasedData =>

// console.log(serviceBasedData[0]);
  serviceBasedData[0]
)
