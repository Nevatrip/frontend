const client = require( './_request' );

const query = ( categoryName, lang ) => `*[_type=="settingServiceCategory" && title.${ lang }.key.current=="${ categoryName }"]{...}`;
const params = {};

module.exports = async( project, lang, categoryName ) => await client( project )
  .fetch( query( categoryName, lang ), params )
  .then( category => category[0] );
