const client = require( './_request' );

const query = '*[_type=="settingServicesCollections"]{services[]->,...}';
const params = {};

module.exports = async( project, lang ) => await client( project, lang )
  .fetch( query, params )
  .then( settingServicesCollections => settingServicesCollections );
