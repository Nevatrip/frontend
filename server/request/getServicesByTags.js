const client = require( './__request' );

const query = tags => {
  const tagsArr = [];

  if( Array.isArray( tags ) ) {
    for( let _tagIndex = 0; _tagIndex < tags.length; _tagIndex++ ) {
      tagsArr.push( `"${ tags[_tagIndex] }" in tags[]->key.current` );
    }
  } else {
    tagsArr.push( `"${ tags }" in tags[]->key.current` );
  }
  const tagsString = tagsArr.join( '&&' );

  return '*' +
  '[' +
    '_type == "tour"' +
    ` &&(${ tagsString })` +
    ' &&!("deleted" in status)' +
    ' &&!("hidden" in status)' +
  ']' +
  ' | order(tourPriority) ' +
  '{' +
    '...,' +
    '"category":category->,' +
    '"tags": tags[]->' +
  '}'
};

module.exports = async ( project, lang, tags ) => await client( query( tags ) );
