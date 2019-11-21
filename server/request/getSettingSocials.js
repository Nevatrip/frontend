const client = require( './_request' );

const query = lang => `*[_type == "settingSocials"]{settingSocials[]->, "url": link.${ lang }, "imgSrc": icon.asset, "name": title.${ lang }}`;
const params = {};

module.exports = async( project, lang ) => await client( project )
  .fetch( query( lang ), params )
  .then( socials => socials );
