const client = require("./_request");

const query = ( categoryName, lang ) => `*[_type == "tour"&&category._ref in *[title.${ lang }.key.current=="${ categoryName }"]._id &&!("deleted" in status)&&!("hidden" in status)]{
..., 
"category": category->}`;
const params = {};

module.exports = async ( categoryName, lang ) => {
  return await client.fetch(query( categoryName, lang ), params).then(services => {
    return services;
  });
};
