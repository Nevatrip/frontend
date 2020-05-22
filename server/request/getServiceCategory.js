const client = require( './__request' );

const query = () => '*[_type=="settingServiceCategory"]';

module.exports = async () => await client( query() );
