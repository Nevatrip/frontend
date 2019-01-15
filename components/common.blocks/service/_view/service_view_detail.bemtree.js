block('service').mod('view', 'detail')(
  content()((node, ctx) => {
    return [
      {
        block: 'title',
        mods: {view: 'xl'},
        url: ctx.content.img || '',
        title: ctx.content.title || '',
      },
      {
        block: 'page',
        elem: 'content',
        elemMods: {view: 'narrow'},
        content: [
          {
            block: 'page',
            elem: 'row',
            content: [
              {
                block: 'page',
                elem: 'col',
                elemMods: {view: 'main'},
                content: [
                  {
                    block: 'service',
                    elem: 'description',
                    duration: ctx.content.duration || '',
                    time: ctx.content.schedule || '',
                    fromPoint: ctx.content.point.title || '',
                    vehicle: ctx.content.place.title || '',
                    excursion: ctx.content.language || '',
                    placeFeatures: ctx.content.placeFeatures.title || '',
                  },
                ],
              },
              {
                block: 'page',
                elem: 'col',
                elemMods: {view: 'aside'},
                content: [
                  {
                    block: 'service',
                    elem: 'price-info',
                    discount: ctx.content.discount || '',
                    time: ctx.content.time || '',
                  },
                  {
                    block: 'service',
                    elem: 'buy',
                    content: {
                      price: ctx.content.price || '',
                      priceOutside: ctx.content.priceOld || '',
                      title: ctx.content.title || '',
                      urlBuy: ctx.content.key.current ? (ctx.content.key.current + '#buy') : '',
                    }
                  },
                ],
              },
            ]
          },
          {
            block: 'page',
            elem: 'hr'
          },
          {
            block: 'page',
            elem: 'row',
            content: [
              {
                block: 'page',
                elem: 'col',
                elemMods: {view: 'main'},
                content: [
                  {
                    block: 'heading',
                    mods: {size: 'xl'},
                    content: {
                      html: 'Об&nbsp;экскурсии'
                    }
                  },
                  ctx.content.description && {
                    block: 'page',
                    elem: 'text',
                    content: {
                      html: ctx.content.description || ''
                    }
                  },
                  {
                    block: 'page',
                    elem: 'hr',
                    elemMods: {view: 'short'}
                  },
                  {
                    block: 'heading',
                    mods: {size: 'xl'},
                    content: {
                      html: 'Карта маршрута'
                    },
                  },
                  {
                    block: 'page',
                    elem: 'iframe-container',
                    content: {
                      iframe: ctx.content.routeMap,
                      height: '400',
                      width: '100%',
                    },
                    attrs: {
                      id: 'map'
                    },
                    mix: {
                      block: 'service',
                      elem: 'map',
                    },
                  }
                ]
              },
              {
                block: 'page',
                elem: 'col',
                elemMods: {view: 'aside'},
                content: [
                  {
                    block: 'heading',
                    mods: {size: 'xl'},
                    content: {
                      html: 'Галерея'
                    },
                  },
                  {
                    block: 'service',
                    elem: 'gallery',
                    content: {
                      photos: ctx.content.photos || [],
                      title: ctx.content.title || '',
                    }
                  },
                  {
                    block: 'heading',
                    mods: {size: 'xl'},
                    content: {
                      html: 'Вы&nbsp;увидите'
                    },
                  },
                  {
                    block: 'list',
                    items: (ctx.content.attractions.map(item=>(item.title))) || [],
                    mods: {type: 'disk', size: 'md'}
                  },
                  {
                    block: 'heading',
                    mods: {size: 'xl'},
                    content: {
                      html: ctx.content.priceDescription || '',
                    },
                  },
                  {
                    block: 'service',
                    elem: 'buy',
                    content: {
                      price: ctx.content.price || '',
                      priceOutside: ctx.content.priceOld || '',
                      title: ctx.content.title || '',
                      urlBuy: ctx.content.key.current ? (ctx.content.key.current + '#buy') : '',
                    }
                  },
                  {
                    block: 'page',
                    elem: 'hr'
                  },
                  {
                    block: 'heading',
                    mods: {size: 'xl'},
                    content: {
                      html: 'Другие наши экскурсии'
                    },
                  },
                  {
                    block: 'service',
                    mods: {view: 'list-item-sm'},
                    url: ctx.content.url,
                    image: ctx.content.img,
                    title: ctx.content.title,
                  }
                ]
              },
            ]
          },
        ]
      },
    ]
  })
);
