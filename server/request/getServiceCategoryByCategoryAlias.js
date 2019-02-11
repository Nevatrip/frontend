const client = require("./_request");

const query = ( categoryName, lang ) => `*[_type=="settingServiceCategory" && title.${ lang }.key.current=="${ categoryName }"]{...}`;
const params = {};

module.exports = async ( categoryName, lang ) => {
  return await client.fetch(query( categoryName, lang ), params).then(category => {
    // console.log(category);
    return category;
  });
};
