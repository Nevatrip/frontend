const client = require( './_request' );

const query = `*[_type == "tour"&&!("deleted" in status)&&!("hidden" in status)]{
...,
"category": category->}`;
const params = {};

const tourSortByPriority = services => {
  const sortedArray = [];

  for( let i = 0; i < services.length; i++ ) {
    if( services[i].tourPriority ) {
      sortedArray.push( services[i] );
      services.splice( i, 1, {} );
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

  services = [
    ...sortedArray,
    ...services.filter( item => Object.keys( item ).length > 0 )
  ];

  return services;
};

module.exports = async( project, lang ) => await client( project, lang )
  .fetch( query, params )
  .then( tours => tourSortByPriority( tours ) );
