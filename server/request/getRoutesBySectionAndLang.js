const client = require( './_request' );

const query = (section, lang) => `*[
defined(title.${lang}.key.current)
&&(_type == "${section}")]{_id,"title":title.${lang}.key.current}`;
const params = {};

module.exports = async(section, lang) => await client.fetch( query (section, lang), params ).then( routes =>
  routes.map(item =>item.title)
);
