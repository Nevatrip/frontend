const client = require( './__request' );

const query = () => '*[_type == "tour"&&!("deleted" in status)&&!("hidden" in status)] | order(tourPriority)' +
'{' +
  '...,' +
  '"category": category->' +
'}';

module.exports = async () => await client( query() );
