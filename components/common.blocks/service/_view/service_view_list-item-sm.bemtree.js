block('outside').mod('view', 'list-item-sm')(
  tag()('article'),
  def()((node, ctx) => {
    node._img = ctx.img;
    node._name = ctx.name;
    return applyNext()
  }),
  content()((node, ctx) => {
    return [
      {
        elem: 'content',
        mix: {block: 'page', elem: 'content'},
        content: [
          {
            elem: 'row',
            content: [
              {
                elem: 'col',
                content: [
                  {
                    elem: 'image',
                  }
                ]
              },
              {
                elem: 'col',
                content: [
                  {
                    elem: 'title',
                    title: ctx.service.title,
                  },
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
                    elem: 'price-outside',
                    pricePierce: ctx.service.priceOutside,
                  }
                ]
              },
            ],
          }
        ],
      }
    ]
  }),
);
