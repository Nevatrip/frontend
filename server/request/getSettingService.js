const client = require( './__request' );

const query = () => '*[_type=="settingService"]{...}';

module.exports = async () => ( await client( query(), true, 7*24*60*60*1000 ) )[0];
