const client = require("./_request");

const query = ( categoryName ) => `*[_type=="settingServiceCategory" && key.current=="${ categoryName }"]{...}`;
const params = {};

module.exports = async ( categoryName ) => {
  return await client.fetch(query( categoryName ), params).then(category => {
    // console.log(category);
    return category;
  });
};
