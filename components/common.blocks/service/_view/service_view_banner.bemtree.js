block('service').mod('view', 'banner')(
  // tag()('article'),
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
                block: 'button',
                mods: {
                  type: 'link',
                },
                text: 'Купить',
                url: ctx.service.urlBuy,
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
