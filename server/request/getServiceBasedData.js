const client = require("./_request");

const query = '*[_type=="serviceBasedData"]{...}';
const params = {};

module.exports = async () => {
  return await client.fetch(query, params).then(serviceBasedData => {
    // console.log(serviceBasedData[0]);
    return serviceBasedData[0];
  });
}
