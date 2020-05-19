const client = require( './__request' );

const query = ( lang, alias ) => {
  const key = `title.${ lang }.key.current`;

  return `*[${ key } == "${ alias }" && !("deleted" in status)]{...}`;
};

module.exports = async ( project, lang, alias ) => await client( query( lang, alias ) );
