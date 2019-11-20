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

module.exports = async( project, lang, tags ) => await client( project, lang, tags )
  .fetch( query( tags ), params )
  .then( services => services );
