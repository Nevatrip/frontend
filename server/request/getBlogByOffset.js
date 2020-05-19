const client = require( './__request' );

const query = ( lang, start, end ) => {
  const key = `title.${ lang }`;

  return `*[_type=="blog" && defined(${ key })] | order(_createdAt desc) [${ start }..${ end }]` +
    '{' +
      '"img":previewImage,' +
      `"h1":title.${ lang }.name,` +
      `"textSrc":content.${ lang },` +
      `"alias":title.${ lang }.key.current,` +
      '"realDate":_createdAt,' +
      '"dateSrc":releaseDate' +
    '}';
};

module.exports = async ( project, lang, start, end ) => await client( query( lang, start, end ) );

