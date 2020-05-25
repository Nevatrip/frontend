const client = require( './__request' );

const query = ( categoryName, lang ) => '*' +
  '[' +
    '_type=="tour"' +
    ' && category._ref in ' +
    '*[' +
      `title.${ lang }.key.current=="${ categoryName }"` +
    ']._id ' +
    ' &&!("deleted" in status)' +
    ' &&!("hidden" in status)' +
  ']' +
  ' | order(tourPriority) ' +
  '{' +
    '...,' +
    '"category":category->' +
  '}';

module.exports = async ( project, lang, categoryName ) => await client( query( categoryName, lang ) );
