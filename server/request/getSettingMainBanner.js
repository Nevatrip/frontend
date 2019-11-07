const client = require( './_request' );

const query = lang => `*[_type == "settingMainBanner"]{"alias":Banner.${ lang }.tour->title.${ lang }.key.current,"image":Banner.${ lang }.titleImage,"link":Banner.${ lang }.link}`;
const params = {};

module.exports = async lang => await client().fetch( query( lang ), params ).then( banner =>
  banner
)
