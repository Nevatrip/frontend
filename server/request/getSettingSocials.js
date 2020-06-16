const client = require( './__request' );

const query = lang => '*[_type=="settingSocials"]' +
  '{' +
    'settingSocials[]->,' +
    `"url":link.${ lang },` +
    '"imgSrc":icon.asset,' +
    `"name":title.${ lang }` +
  '}';

module.exports = async ( project, lang ) => await client( query( lang ), process.env.API_CACHE || true, 7*24*60*60*1000 );
