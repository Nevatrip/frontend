const client = require( './_request' );

const query = lang => `*[_type == "settingMainBanner"]{
"title":Banner.${ lang }.title,
"alias":Banner.${ lang }.tour->title.${ lang }.key.current,
"image":Banner.${ lang }.titleImage,
"imageSm":Banner.${ lang }.titleImageSm,
"link":Banner.${ lang }.link
}`;
const params = {};

module.exports = async( project, lang ) => await client( project )
  .fetch( query( lang ), params )
  .then( banner => banner );
