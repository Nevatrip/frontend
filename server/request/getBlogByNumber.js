const client = require( './_request' );

const query = ( lang, number ) => `*[_type == "blog"] | order(_createdAt desc) [${ number }]{
"img": previewImage,
"h1": title.${ lang }.name,
"text": description.${ lang },
"alias": title.${ lang }.key,
"date": _createdAt}`;
const params = {};

module.exports = async( project, lang, number ) => await client( project )
  .fetch( query( lang, number ), params )
  .then( blog => blog );

