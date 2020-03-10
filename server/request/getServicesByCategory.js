const client = require( './_request' );

const query = ( categoryName, lang ) => `*[_type == "tour"&&category._ref in *[title.${ lang }.key.current=="${ categoryName }"]._id &&!("deleted" in status)&&!("hidden" in status)] | order(tourPriority) {
...,
"category": category->}`;
const params = {};

module.exports = async( project, lang, categoryName ) => await client( project )
  .fetch( query( categoryName, lang ), params )
  .then( services => services);
