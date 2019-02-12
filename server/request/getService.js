const client = require("./_request");

const query = ( alias, lang, category ) => {
  const key = `title.${ lang }.key.current`;
  const categoryQuery = `&& references(*[_type=="settingServiceCategory" && ${ key } == "${ category }"]._id)`;

  return `*[${ key } == "${ alias }" && !("deleted" in status) ${ category ? categoryQuery : '' }]{
    ...,
    "point": point->,
    "place": place->,
    "category": category->,
    "attractions": attractions[]->,
    "tourLanguage": tourLanguage[]->{title, "icon": icon.asset->},
    "placeFeatures": placeFeatures[]->{title, "icon": icon.asset->},
    "titleImage": titleImage.asset->{url}.url}`;
}
const params = {};

module.exports = async ( alias, lang, category ) => {
  return await client.fetch(query( alias, lang, category ), params).then(tour => {
    return tour[0];
  });
};
