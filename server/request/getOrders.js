const Request = require( './_customRequest' );

module.exports = async( params = {
  where: {},
  fields: {
    sessionId: true,
    user: true,
    id: true,
    status: true,
    created: true,
    updated: true,
    source: true,
    payment: true,
    products: true
  },
  offset: 0,
  limit: 10,
  skip: 0,
  order: ['string']
} ) => {
  const orders = new Request( 'http://api.nevatrip.ru/orders', params );

  return await orders.request();
};
