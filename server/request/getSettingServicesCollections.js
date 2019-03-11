const client = require( './_request' );

const query = '*[_type=="settingServicesCollections"]{services[]->,...}';
const params = {};

module.exports = async() => await client.fetch( query, params ).then( settingServicesCollections => settingServicesCollections );
