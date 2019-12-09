const client = require( './_request' );

const query = () => '*[_type == "settingBlog"]{...}';
const params = {};

module.exports = async( project, lang ) => await client( project )
  .fetch( query( lang ), params )
  .then( settingBlog => settingBlog );
