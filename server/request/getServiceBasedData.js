const client = require( './__request' );

const query = () => '*[_type=="serviceBasedData"]{...}';

module.exports = async () => ( await client( query(), process.env.API_CACHE || true, 7*24*60*60*1000 ) )[0];
