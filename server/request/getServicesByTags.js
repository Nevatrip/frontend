const client = require( './_request' );

// let titleImageCropped = '';
//
// if( titleImage ) {
//   if( titleImage.hotspot ) {
//     titleImageCropped = node._urlFor( titleImage )
//       .focalPoint( titleImage.hotspot.x.toFixed( 2 ), titleImage.hotspot.y.toFixed( 2 ) )
//       .fit( 'crop' )
//       .width( 404 )
//       .height( 277 )
//       .url();
//   } else if( titleImage ) {
//     titleImageCropped = node._urlFor( titleImage )
//       .fit( 'crop' )
//       .width( 404 )
//       .height( 277 )
//       .url();
//   }
// }

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

  return `*[ _type == "tour"&&(${ tagsString })&&!("deleted" in status)&&!("hidden" in status)]{ ...,"category":category->,"tags": tags[]->}`
};
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

module.exports = async( project, lang, tags ) => await client( project, lang, tags )
  .fetch( query( tags ), params )
  .then( services => tourSortByPriority( services ) );
