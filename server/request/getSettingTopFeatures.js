const client = require( './__request' );

const query = lang => '*[_type=="settingTopFeatures"]' +
  ' | order(sort) ' +
  '{' +
    'settingTopFeatures[]->,' +
    `"description":description.${ lang },` +
    '"img":icon.asset,' +
    `"name":title.${ lang }` +
  '}';

module.exports = async ( project, lang ) => await client( query( lang ) );
