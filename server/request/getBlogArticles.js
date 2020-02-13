const client = require( './_request' );

const query = lang => {
  const key = `title.${ lang }`;

  return `*[_type == "blog" && defined(${ key })] | order(_createdAt desc){
        "img": previewImage,
        "h1": title.${ lang }.name,
        "textSrc": content.${ lang },
        "alias": title.${ lang }.key.current,
        "dateSrc": _createdAt}`;
}
const params = {};

module.exports = async( project, lang ) => await client( project )
  .fetch( query( lang ), params )
  .then( blog => blog );

