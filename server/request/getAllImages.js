const client = require( './__request' );

const query = () => '*[_type=="image"]';

module.exports = async () => await client( query() );
