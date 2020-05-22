const client = require( './__request' );

const query = ( lang, number, excludeAlias ) => {
  const key = `title.${ lang }`;

  return '*[' +
    '_type=="blog"' +
    ` && defined(${ key })` +
    ` && title.${ lang }.key.current!="${ excludeAlias }"` +
    ' &&!("deleted" in status)' +
    ' &&!("hidden" in status)' +
  ']' +
  `[0..${ number - 1 }]` +
  ' | order(_createdAt asc) {' +
    `"h1":title.${ lang }.name,` +
    `"alias":title.${ lang }.key.current` +
  '}';
}

module.exports = async ( project, lang, number, excludeAlias ) =>
  await client( query( lang, number, excludeAlias ) );
