const client = require( './_request' );

const query = ( lang, start, end ) => {
  const key = `title.${ lang }`;

  return `*[_type == "blog" && defined(${ key })] | order(_createdAt desc) [${ start }..${ end }]{
        "img": previewImage,
        "h1": title.${ lang }.name,
        "textSrc": content.${ lang },
        "alias": title.${ lang }.key.current,
        "dateSrc": _createdAt}`;
}
const params = {};

module.exports = async( project, lang, start, end ) => await client( project )
  .fetch( query( lang, start, end ), params )
  .then( blog => blog );

