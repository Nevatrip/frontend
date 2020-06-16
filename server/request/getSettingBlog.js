const client = require( './__request' );

const query = () => '*[_type == "settingBlog"]{...}';

module.exports = async ( project, lang ) => ( await client( query( lang ), process.env.API_CACHE || true, 7*24*60*60*1000 ) )[0];
