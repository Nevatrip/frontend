const client = require( './__request' );

const query = ( categoryName, excludeID, lang ) =>
  '*[' +
    '_type=="tour"' +
    ' && category._ref in *[' +
        '_type=="settingServiceCategory"' +
        ` && title.${ lang }.key.current=="${ categoryName }"` +
    ']._id '+
    ` && _id!="${ excludeID }"` +
    ' &&!("deleted" in status)' +
    ' &&!("hidden" in status)' +
  ']' +
  '{' +
    '...,' +
    '"category":category->' +
  '}';

module.exports = async ( project, lang, categoryName, excludeID ) =>
  await client( query( categoryName, excludeID, lang ) );
