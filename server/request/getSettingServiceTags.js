const client = require("./_request");

const query = '*[_type=="settingServiceTag"]';
const params = {};

module.exports = async () => {
  return await client.fetch(query, params).then(tags => {
    // console.log(tags);
    return tags;
  });
}
