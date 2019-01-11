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
                mods: {type: 'check-in-disk ', size: 'xl'},
                items: ctx.service.features
              },
              {
                block: 'page',
                elem: 'row',
                elemMods: {view: 'service-banner'},
                content: [
                  {
                    block: 'service',
                    elem: 'buy',
                  },
                  {
                    block: 'service',
                    elem: 'more',
                    url: ctx.service.url,
                    title: ctx.service.title,
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
