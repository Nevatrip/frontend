const client = require( './_request' );

const query = ( collectionName, lang ) => `*[_type=="settingServicesCollections" && title.${ lang }.key.current=="${ collectionName }"]{services[]->{category->,...},...}`;
const params = {};

module.exports = async( collectionName, lang ) => await client().fetch( query( collectionName, lang ), params ).then( collection =>
  collection[0]
);
