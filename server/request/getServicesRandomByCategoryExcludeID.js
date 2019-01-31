const client = require("./_request");
const query = (categoryName, excludeID) => `*[_type =="tour" && category._ref in *[_type=="settingServiceCategory" && key.current=="${categoryName}"]._id  && _id!="${excludeID}"&&!("deleted" in status)&&!("hidden" in status)]{..., "category": category->}`;
const params = {};

module.exports = async (categoryName, excludeID) => {
  return await client.fetch(query(categoryName, excludeID), params).then(servicesRandom => {
    // console.log(query(categoryName, excludeID));
    return servicesRandom;
  });
};
