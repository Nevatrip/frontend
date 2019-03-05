const client = require( './_request' );

const query = lang => `*[_type=="settingMenu" && key.current=="header"]{...,menu[]->{"title": title.${ lang }.name,"subTitle": subTitle.${ lang },"alias": title.${ lang }.key.current}}.menu`;
const params = {};

module.exports = async lang => await client.fetch( query( lang ), params ).then( navigation => navigation );
