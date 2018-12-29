block('service').mod('view', 'banner')(
  // tag()('article'),
  content()((node, ctx) => {
    return [
      {
        block: 'image',
        mods: {view: 'bg'},
        url: ctx.service.img,
        alt: ctx.service.title,
        title: ctx.service.title,
      },
      {
        elem: 'content',
        mix: {block: 'page', elem: 'content'},
        content: [
          {
            elem: 'blank',
            content: [
              {
                block: 'heading',
                mods: {size: 'l'},
                content: [
                  {
                    block: 'link',
                    url: ctx.service.url,
                    title: ctx.service.title,
                    content: ctx.service.title
                  }
                ]
              },
              {
                block: 'list',
                mods: {colored: true},
                items: ctx.service.features
              },
              {
                elem: 'price',
                content: ctx.service.price,
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
                content: ctx.service.priceOutside,
              }
            ]
          }
        ],
      }
    ]
  }),
);
