block('service').mod('view', 'banner')(
  content()((node, ctx) => {
    return [
      {
        block: 'image',
        mods: {view: 'bg'},
        url: ctx.content.img || '',
        alt: ctx.content.title,
        title: ctx.content.title,
      },
      {
        elem: 'content',
        mix: {block: 'page', elem: 'content'},
        content: [
          {
            elem: 'blank',
            content: [
              ctx.content.title && {
                block: 'heading',
                mods: {size: 'l'},
                mix: {block: 'service', elem: 'title', elemMods: {view: 'md'},},
                content: [
                  {
                    block: 'link',
                    mods: {view: 'inherit'},
                    url: ctx.content.key.current,
                    title: ctx.content.title,
                    content: ctx.content.title,
                  }
                ]
              },
              ctx.content.features && {
                block: 'list',
                mods: {type: 'check-in-disk ', size: 'xl'},
                items: ctx.content.features.split('\n'),
              },
              {
                block: 'page',
                elem: 'row',
                elemMods: {view: 'service-banner'},
                content: [
                  {
                    block: 'service',
                    elem: 'buy',
                    content: {
                      price: ctx.content.price,
                      priceOutside: ctx.content.priceOld,
                      title: ctx.content.title,
                      urlBuy: ctx.content.key.current + '#buy',
                    }
                  },
                  {
                    block: 'service',
                    elem: 'more',
                    url: ctx.content.key.current,
                    title: ctx.content.title,
                  },
                ]
              },
            ]
          }
        ],
      }
    ]
  }),
);
