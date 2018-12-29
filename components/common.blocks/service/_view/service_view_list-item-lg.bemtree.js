block('service').mod('view', 'list-item-lg')(
  // tag()('article'),
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
                block: 'page',
                elem: 'col',
                content: [
                  {
                    block: 'link',
                    url: ctx.service.url,
                    content: {
                      block: 'image',
                      mix: {block: node.block, elem: 'image'},
                      url: ctx.service.img,
                      alt: ctx.service.title,
                      title: ctx.service.title,
                    }
                  },

                ]
              },
              {
                block: 'page',
                elem: 'col',
                content: [
                  {
                    block: 'heading',
                    mods: {size: 'l'},
                    content: {
                      block: 'link',
                      url: ctx.service.url,
                      title: ctx.service.title,
                      content: ctx.service.title,
                    },
                  },
                  {
                    block: 'list',
                    mods: {colored: true},
                    items: ctx.service.features
                  },
                  {
                    block: 'service',
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
