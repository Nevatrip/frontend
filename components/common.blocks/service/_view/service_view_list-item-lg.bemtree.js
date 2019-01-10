block('service').mod('view', 'list-item-lg')(
  content()((node, ctx) => {
    return [
      {
        elem: 'content',
        mix: {block: 'page', elem: 'content'},
        content: [
          {
            block: 'page',
            elem: 'row',
            content: [
              {
                block: 'service',
                elem: 'image',
                mix: {block: 'page', elem: 'col'},
                content: [
                  {
                    block: 'link',
                    url: ctx.service.url,
                    content: {
                      block: 'image',
                      mods: {view: 'bg'},
                      url: ctx.service.img,
                      alt: ctx.service.title,
                      title: ctx.service.title,
                    }
                  },

                ]
              },
              {
                block: 'service',
                elem: 'aside-content',
                mix: {block: 'page', elem: 'col'},
                content: [
                  {
                    block: 'heading',
                    mods: {size: 'l'},
                    mix: {block: 'service', elem: 'title', elemMods: {view: 'sm'},},
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
                    mods: {view: 'check'},
                    items: ctx.service.features
                  },
                  {
                    block: 'page',
                    elem: 'row',
                    elemMods: {view: 'service-list-item-lg'},
                    content: [
                      {
                        block: 'service',
                        elem: 'price',
                        elemMods: {view: 'sm'},
                        content: ctx.service.price,
                      },
                      {
                        block: 'button',
                        mods: {
                          type: 'link',
                        },
                        text: {html:'Подробнее&nbsp;&rarr;'},
                        url: ctx.service.urlBuy,
                        title: ctx.service.title,
                      },
                    ]
                  },
                  {
                    block: 'service',
                    elem: 'price-outside',
                    content: ctx.service.priceOutside,
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
