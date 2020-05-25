const client = require( './__request' );

const query = ( categoryName, lang ) => '*' +
  '[' +
    '_type=="settingServiceCategory" ' +
    ` && title.${ lang }.key.current=="${ categoryName }"` +
  ']' +
  '{' +
    '...' +
  '}';

module.exports = async ( project, lang, categoryName ) => ( await client( query( categoryName, lang ) ) )[0];
