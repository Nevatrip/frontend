const client = require( './__request' );

const query = () => '*[_type=="settingServicesCollections"]';

module.exports = async () => await client( query() );
