const client = require( './_request' );

const query = ( categoryName, lang ) => `*[_type=="settingServiceCategory" && title.${ lang }.key.current=="${ categoryName }"]{...}`;
const params = {};

module.exports = async( categoryName, lang ) => await client().fetch( query( categoryName, lang ), params ).then( category =>
  category[0]
);
