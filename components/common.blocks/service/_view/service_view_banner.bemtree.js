block('service').mod('view', 'banner')(
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
                mix: {block: 'service', elem: 'title', elemMods: {view: 'md'},},
                content: [
                  {
                    block: 'link',
                    mods: {view: 'inherit'},
                    url: ctx.service.url,
                    title: ctx.service.title,
                    content: ctx.service.title
                  }
                ]
              },
              {
                block: 'list',
                mods: {view: 'colored-check'},
                items: ctx.service.features
              },
              {
                block: 'page',
                elem: 'row',
                elemMods: {view: 'service-banner'},
                content: [
                  {
                    block: 'service',
                    elem: 'price',
                    elemMods: {view: 'md'},
                    content: ctx.service.price,
                  },
                  {
                    block: 'button',
                    mods: {
                      type: 'link',
                    },
                    text: 'Купить',
                    url: ctx.service.urlBuy,
                    title: 'Купить ' + ctx.service.title,
                  },
                  {
                    block: 'service',
                    elem: 'more',
                    url: ctx.service.url,
                    title: ctx.service.title,
                  },
                ]
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
