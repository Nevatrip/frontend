const client = require( './__request' );

const query = () => '*[_type=="settingServicesCollections"]' +
  '{' +
    'services[]->,...' +
  '}';

module.exports = async () => await client( query(), false, 7*24*60*60*1000 );
