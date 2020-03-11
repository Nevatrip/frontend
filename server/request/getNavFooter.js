const client = require( './_request' );

const query = lang => `*[_type=="settingMenu" && key.current=="footer"]{...,menu[]->{"title": title.${ lang }.name,"subTitle": subTitle.${ lang },"alias": title.${ lang }.key.current}}.menu`;
const params = {};

module.exports = async( project, lang ) => await client( project )
  .fetch( query( lang ), params )
  .then( navigation => navigation );
