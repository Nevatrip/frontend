const client = require( './__request' );

const query = lang => '*[_type == "settingMainBanner"]' +
'{' +
  `"title":Banner.${ lang }.title,` +
  `"alias":Banner.${ lang }.tour->title.${ lang }.key.current,` +
  `"image":Banner.${ lang }.titleImage,` +
  `"imageSm":Banner.${ lang }.titleImageSm,` +
  `"link":Banner.${ lang }.link` +
'}';

module.exports = async ( project, lang ) => ( await client( query( lang ) ) )[0] || {};
