const client = require("./_request");

const query = ( alias, lang ) => `*[title.${ lang }.key.current == "${ alias }" &&!("deleted" in status)]{
...,
"point": point->,
"place": place->,
"category": category->,
"attractions": attractions[]->,
"tourLanguage": tourLanguage[]->{title, "icon": icon.asset->},
"placeFeatures": placeFeatures[]->{title, "icon": icon.asset->},
"titleImage": titleImage.asset->{url}.url}`;
const params = {};

module.exports = async ( alias, lang ) => {
  return await client.fetch(query( alias, lang ), params).then(tour => {
    // console.log(query( alias ));
    return tour;
  });
};
