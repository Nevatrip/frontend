const client = require( './__request' );

const query = lang => '*[_type=="settingMenu" && key.current=="header"]' +
  '{' +
    '...,' +
    'menu[]->{' +
      `"title": title.${ lang }.name,` +
      `"subTitle": subTitle.${ lang },` +
      `"alias": title.${ lang }.key.current` +
    '}' +
  '}.menu';

module.exports = async ( project, lang ) => await client( query( lang ), false, 7*24*60*60*1000 );
