const client = require( './__request' );

const query = ( serviceAlias, lang ) => `*[_type=="tour" && title.${ lang }.key.current=="${ serviceAlias }"]{category->}`;

module.exports = async ( project, lang, serviceAlias ) =>
  ( await client( query( serviceAlias, lang ) ) )[0];
