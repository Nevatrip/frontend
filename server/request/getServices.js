const client = require( './_request' );

const query = `*[_type == "tour"&&!("deleted" in status)&&!("hidden" in status)] | order(tourPriority) {
...,
"category": category->}`;
const params = {};

module.exports = async( project, lang ) => await client( project, lang )
  .fetch( query, params )
  .then( tours => tours );
