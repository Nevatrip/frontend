const client = require( './_request' );

const query = ( lang, start, end ) => `*[_type == "blog"] | order(_createdAt desc) [${ start }..${ end }]{
"img": previewImage,
"h1": title.${ lang }.name,
"textSrc": description.${ lang },
"alias": title.${ lang }.key,
"dateSrc": _createdAt}`;
const params = {};

module.exports = async( project, lang, start, end ) => await client( project )
  .fetch( query( lang, start, end ), params )
  .then( blog => blog );

