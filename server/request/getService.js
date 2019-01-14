const client = require("./_request");

const query = '*[_id == "988d8385-873f-4632-b995-2e8ea00e3077"]';
const params = {};

module.exports = async () => {
  return await client.fetch(query, params).then(tour => {
    // console.log(tour);
    return tour;
  });
}
