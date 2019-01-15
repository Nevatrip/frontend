const client = require("./_request");

const query = '*[_type=="settingServiceCategory"]';
const params = {};

module.exports = async () => {
  return await client.fetch(query, params).then(category => {
    // console.log(category);
    return category;
  });
}
