const client = require( './_request' );

const query = ( serviceAlias, lang ) => `*[_type=="tour" && title.${ lang }.key.current=="${ serviceAlias }"]{category->}`;
const params = {};

module.exports = async( serviceAlias, lang ) => await client().fetch( query( serviceAlias, lang ), params ).then( category =>
  category[0]
);
