const client = require("./_request");

const query = ( alias ) => `*[key.current == "${ alias }" ]{
  ...,
  "point": point->,
  "place": place->,
  "attractions": attractions[]->,
  "placeFeatures": placeFeatures[]->,
  "titleImage": titleImage.asset->{url}.url}`;
const params = {};

module.exports = async ( alias ) => {
  return await client.fetch(query( alias ), params).then(tour => {
    // console.log(tour);
    return tour;
  });
}
