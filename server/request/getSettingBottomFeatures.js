const client = require( './__request' );

const query = lang => '*[_type == "settingBottomFeatures"]' +
  '{' +
    'settingBottomFeatures[]->,' +
    `"description": description.${ lang },` +
    '"img": icon.asset,' +
    `"name": title.${ lang }` +
  '}';

module.exports = async ( project, lang ) => await client( query( lang ) );
