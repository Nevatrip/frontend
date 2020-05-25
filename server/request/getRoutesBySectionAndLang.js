const client = require( './__request' );

const query = ( section, lang ) => `*[defined(title.${ lang }.key.current)&&(_type == "${ section }")]` +
  '{' +
    '_id,' +
    `"title":title.${ lang }.key.current`+
  '}';

module.exports = async ( section, lang ) => (
  await client( query( section, lang ), true, 7*24*60*60*1000 ) ).map( item => item.title
);
