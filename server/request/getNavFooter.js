const client = require( './__request' );

const query = lang => '*[_type=="settingMenu" && key.current=="footer"]' +
  '{' +
    '...,' +
    'menu[]->{' +
      `"title":title.${ lang }.name,` +
      `"subTitle":subTitle.${ lang },` +
      `"alias":title.${ lang }.key.current,` +
      `"anchor": anchor.${ lang }` +
    '}' +
  '}.menu';

module.exports = async ( project, lang ) => await client( query( lang ), true, 7*24*60*60*1000 );
