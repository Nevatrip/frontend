const client = require( './__request' );

const query = ( lang, num ) => '*[_type=="tour"]' +
  `[0..${ num }]`+
  '{' +
    `title.${ lang },` +
    'titleImage' +
  '}' +
  '|order(_createdAt asc)';

module.exports = async ( project, lang, num ) => await client( query( lang, num ) );
