const client = require( './__request' );

const query = () => '*[_type=="settingServiceTag"]';

module.exports = async () => await client( query() );
