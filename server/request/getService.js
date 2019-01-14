const client = require("./_request");

const query = '*[_type=="tour" && _id=="d9b95826-7fd6-46b8-99d6-9bca0d2c1c47"]{..., "point": point->,..., "place": place->,..., "attractions": attractions[]->}';
const params = {};

module.exports = async () => {
  return await client.fetch(query, params).then(tour => {
    // console.log(tour);
    return tour;
  });
}
