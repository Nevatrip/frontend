const client = require( './_request' );

const query = ( categoryName, lang ) => `*[_type == "tour"&&category._ref in *[title.${ lang }.key.current=="${ categoryName }"]._id &&!("deleted" in status)&&!("hidden" in status)]{
...,
"category": category->}`;
const params = {};

const tourSortByPriority = services => {
  const sortedArray = [];

  for( let i = 0; i < services.length; i++ ) {
    if( services[i].tourPriority ) {
      sortedArray.push( services[i] );
      services.splice( i, 1 );
    }
  }

  sortedArray.sort( ( a, b ) => {
    if( a.tourPriority < b.tourPriority) {
      return -1;
    } else if( a.tourPriority > b.tourPriority ) {
      return 1;
    }

    return 0;
  } );

  services = [...sortedArray, ...services];

  return services;
};

module.exports = async( project, lang, categoryName ) => await client( project )
  .fetch( query( categoryName, lang ), params )
  .then( services => {
    return tourSortByPriority( services );
  } );
