block('service').mod('view', 'detail')(
  content()((node, ctx) => {
    return [
      {
        block: 'title',
        url: ctx.service.img,
        alt: ctx.service.title,
        title: ctx.service.title,
      },
      {
        block: 'page',
        elem: 'content',
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
                    duration: ctx.service.duration,
                    time: ctx.service.time,
                    fromPoint: ctx.service.fromPoint,
                    vehicle: ctx.service.vehicle,
                    excursion: ctx.service.excursion,
                    onBoat: ctx.service.onBoat
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
                    discount: ctx.service.discount,
                    time: ctx.service.time,
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
                    elem: 'price',
                    content: ctx.service.price,
                  },
                  {
                    block: 'service',
                    elem: 'price-outside',
                    content: ctx.service.priceOutside,
                  }
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
                elemMods: { view: 'main' },
                content: [
                  {
                    block: 'heading',
                    mods: {size: 'xl'},
                    content: {
                      html: 'Об&nbsp;экскурсии'
                    }
                  },
                  {
                    block: 'page',
                    elem: 'text',
                    content: {
                      html: ctx.service.content
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
                    }
                  },
                  {
                    block: 'service',
                    elem: 'map',
                    mix: {
                      block: 'page',
                      elem: 'iframe-container'
                    },
                    attrs: {
                      id: '#map'
                    },
                    content: {
                      html: ctx.service.map
                    }
                  }
                ]
              },
              {
                block: 'page',
                elem: 'col',
                elemMods: { view: 'aside' },
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
                    content: 'изображения'
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
                    items: ctx.service.showplaces,
                    mods: {'colored':true}
                  },
                  {
                    block: 'heading',
                    mods: {size: 'xl'},
                    content: {
                      html: ctx.service.textBeforeFinalPrice
                    },
                  },
                  {
                    block: 'service',
                    elem: 'price',
                    content: ctx.service.price
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
                    // content: ctx.service
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
