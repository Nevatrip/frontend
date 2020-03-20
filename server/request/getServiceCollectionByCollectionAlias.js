const client = require( './_request' );

const query = ( collectionName, lang ) => `*[_type=="settingServicesCollections" && title.${ lang }.key.current=="${ collectionName }"]{services[]->{category->,...},...}`;
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

module.exports = async( collectionName, lang, project ) => await client( project, lang )
  .fetch( query( collectionName, lang ), params )
  .then( collection => {
    collection[0].services = tourSortByPriority( collection[0].services );

    return collection[0];
  } );
