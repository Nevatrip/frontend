const client = require( './_request' );

const query = ( categoryName, excludeID, lang ) => `*[_type =="tour" && category._ref in *[_type=="settingServiceCategory" && title.${ lang }.key.current=="${ categoryName }"]._id  && _id!="${ excludeID }"&&!("deleted" in status)&&!("hidden" in status)]{..., "category": category->}`;
const params = {};

module.exports = async( categoryName, excludeID, lang ) => await client().fetch( query( categoryName, excludeID, lang ), params ).then( servicesRandom =>

// console.log(query(categoryName, excludeID));
  servicesRandom
);
