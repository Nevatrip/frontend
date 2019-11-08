const client = require( './_request' );

const query = lang => `*[_type == "settingBottomFeatures"]{settingBottomFeatures[]->, "description": description.${ lang }, "img": icon.asset, "name": title.${ lang }}`;
const params = {};

module.exports = async( project, lang ) => await client( project )
  .fetch( query( lang ), params )
  .then( features => features );
