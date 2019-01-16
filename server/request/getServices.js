const client = require("./_request");

const query = `*[_type == "tour"]{
...,  
"category": category->,
"titleImage": titleImage.asset->{url}.url}`;
const params = {};

module.exports = async () => {
  return await client.fetch(query, params).then(tours => {
    // console.log(tours);
    return tours;
    // bikes.forEach(bike => {
    //   console.log(`${bike.name} (${bike.seats} seats)`)
    // })
  });
}
