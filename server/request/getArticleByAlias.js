const client = require( './_request' );

const query = ( lang, alias ) => {
  const key = `title.${ lang }.key.current`;

  return `*[_type == "page" && ${ key } == "${ alias }" && !("deleted" in status)]{...}`;
};

const params = {};

module.exports = async( project, lang, alias ) => await client( project )
  .fetch( query( lang, alias ), params )
  .then( article => article );
