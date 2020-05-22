const client = require( './__request' );

const query = ( lang, number ) => {
  const key = `title.${ lang }`;

  return `*[_type=="blog" && defined(${ key })] | order(_createdAt desc) [${ number }]` +
    '{' +
      '"img":previewImage,' +
      `"h1":title.${ lang }.name,` +
      `"textSrc":content.${ lang },` +
      `"alias":title.${ lang }.key.current,` +
      '"realDate":_createdAt,' +
      '"dateSrc":releaseDate' +
    '}';
};

module.exports = async ( project, lang, number ) => await client( query( lang, number ) );

