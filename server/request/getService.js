const client = require("./_request");

const query = ( alias ) => `*[key.current == "${ alias }" ]{
...,
"point": point->,
"place": place->,
"category": category->,
"attractions": attractions[]->,
"tourLanguage": tourLanguage[]->{title, "icon": icon.asset->},
"placeFeatures": placeFeatures[]->{title, "icon": icon.asset->},
"titleImage": titleImage.asset->{url}.url}`;
const params = {};

module.exports = async ( alias ) => {
  return await client.fetch(query( alias ), params).then(tour => {
    // console.log(query( alias ));
    return tour;
  });
};
