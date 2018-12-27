block('service').mod('view', 'banner')(
  // tag()('article'),
  addAttrs()((node, ctx) => ({style: "background-image: url(" + ctx.service.img + ")"})),
  replace()((node, ctx) => {
    return [
      {
        elem: 'content',
        mix: {block: 'page', elem: 'content'},
        content: [
          {
            elem: 'blank',
            content: [
              {
                elem: 'features',
                features: ctx.service.features,
              },
              {
                elem: 'price',
                price: ctx.service.price,
              },
              {
                elem: 'buy',
                urlBuy: ctx.service.urlBuy,
              },
              {
                elem: 'more',
                url: ctx.service.url,
              },
              {
                elem: 'price-outside',
                pricePierce: ctx.service.priceOutside,
              }
            ]
          }
        ],
      }
    ]
  }),
);
