const client = require("./_request");

const query = `*[_type == "tour"]{
...,  
"category": category->}`;
const params = {};

module.exports = async () => {
  return await client.fetch(query, params).then(tours => {
    return tours;
  });
};
