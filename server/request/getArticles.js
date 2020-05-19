const client = require( './__request' );

const query = () => '*[_type=="page"]';

module.exports = async () => await client( query() );
