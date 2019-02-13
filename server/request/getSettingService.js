const client = require("./_request");

const query = '*[_type=="settingService"]{...}';
const params = {};

module.exports = async () => {
  return await client.fetch(query, params).then(settingService => {
    // console.log(settingService[0]);
    return settingService[0];
  });
}
