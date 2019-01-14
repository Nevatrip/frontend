const client = require("./_request");

const query = '*[_type==\"settingMenu\" && key.current==\"header\"]{..., menu[]->{title,subTitle,\"alias\": key.current}}.menu';
const params = {};

module.exports = async () => {
  return await client.fetch(query, params).then(navigation => {
    // console.log(navigation);
    return navigation;
  });
}
