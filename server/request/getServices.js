const client = require( './_request' );

const query = `*[_type == "tour"&&!("deleted" in status)&&!("hidden" in status)]{
...,  
"category": category->}`;
const params = {};

module.exports = async() => await client.fetch( query, params ).then( tours => tours );
