const client = require("./_request");

const query = ( categoryName ) => `*[_type == "tour" && category._ref in *[key.current=="${ categoryName }"]._id ]{..., "category": category->}`;

const params = {};

module.exports = async ( categoryName ) => {
  return await client.fetch(query( categoryName ), params).then(services => {
    // console.log(services);
    return services;
  });
};
