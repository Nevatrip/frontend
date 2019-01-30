block('service').mod('view', 'detail')(
  content()((node, {service}) => {

    const {
      titleImage,
      title,
      key,
      price,
      priceOld,
      duration,
      schedule,
      point,
      place,
      placeFeatures,
      sale,
      time,
      description,
      routeMap,
      attractions,
      priceDescription,
      tourLanguage,
      gallery,
      descriptionAppend,
      descriptionPrepend,
    } = service;

    return [
      {
        block: 'title',
        mods: {view: 'xl'},
        url: titleImage || '',
        title: title || '',
      },
      {
        block: 'page',
        elem: 'content',
        elemMods: {view: 'narrow'},
        content: [
          {
            block: 'page',
            elem: 'row',
            elemMods: {sm: 'column'},
            content: [
              {
                block: 'page',
                elem: 'col',
                elemMods: {view: 'main'},
                content: [
                  {
                    block: 'service',
                    elem: 'description',
                    duration: duration || '',
                    time: schedule || '',
                    fromPoint: point ? (point.title || '') : '',
                    vehicle: place ? (place.title || '') : '',
                    excursion: tourLanguage ? tourLanguage.map(item => (item && {
                      url: item.icon.url,
                      name: item.title
                    })) : '',
                    routeMap: routeMap || '',
                    placeFeatures: placeFeatures ? placeFeatures.map(item => (item && {
                      url: item.icon.url,
                      name: item.title
                    })) : '',
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
                    discount: sale || '',
                    time: time || '',
                  },
                  {
                    block: 'service',
                    elem: 'buy',
                    price: price || '',
                    priceOutside: priceOld || '',
                    title: title || '',
                    urlBuy: key.current ? (key.current + '#buy') : '',
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
            elemMods: {sm: 'column'},
            content: [
              {
                block: 'page',
                elem: 'col',
                elemMods: {view: 'main'},
                content: [
                  description && {
                    block: 'heading',
                    mods: {size: 'xl'},
                    content: {
                      html: 'Об&nbsp;экскурсии'
                    }
                  },
                  descriptionPrepend && {
                    block: 'service',
                    elem: 'remark',
                    content: {
                      html: marked(descriptionPrepend) || ''
                    }
                  },
                  {
                    block: 'page',
                    elem: 'text',
                    content: {
                      html: marked(description) || ''
                    }
                  },
                  descriptionAppend && {
                    block: 'service',
                    elem: 'remark',
                    content: {
                      html: marked(descriptionAppend) || ''
                    }
                  },
                  {
                    block: 'page',
                    elem: 'hr',
                    attrs: {
                      id: 'map'
                    },
                    elemMods: {view: 'short'}
                  },
                  routeMap && [
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
                        iframe: routeMap,
                        height: '400',
                        width: '100%',
                      },
                      mix: {
                        block: 'service',
                        elem: 'map',
                      },
                    }
                  ],
                ]
              },
              {
                block: 'page',
                elem: 'col',
                elemMods: {view: 'aside'},
                content: [
                  gallery && [
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
                      photos: gallery,
                    },
                  ],
                  attractions.length > 0 && [
                    {
                      block: 'heading',
                      mods: {size: 'xl'},
                      content: {
                        html: 'Вы&nbsp;увидите'
                      },
                    },
                    {
                      block: 'list',
                      items: (attractions.map(item => (item.title))) || [],
                      mods: {type: 'disk', size: 'md'}
                    },
                  ],
                  priceDescription && {
                    block: 'heading',
                    mods: {size: 'xl'},
                    content: {
                      html: marked(priceDescription) || '',
                    },
                  },
                  {
                    block: 'service',
                    elem: 'buy',
                    price: price || '',
                    priceOutside: priceOld || '',
                    title: title || '',
                    urlBuy: key.current ? (key.current + '#buy') : '',
                  },
                  {
                    block: 'page',
                    elem: 'hr'
                  },
                  node.data.api.servicesRandom.length > 0 && [
                    {
                      block: 'heading',
                      mods: {size: 'xl'},
                      content: {
                        html: 'Похожие экскурсии:'
                      },
                    },
                    {
                      block: 'list',
                      mods: {view: 'no-style', sm: 'inline'},
                      content: node.data.api.servicesRandom.map(item => {
                        return {
                          elem: 'item',
                          content: {
                            block: 'service',
                            mods: {view: 'list-item-sm'},
                            service: item
                          }
                        }
                      })
                    }
                  ],
                ]
              }
            ]
          }
        ]
      }
    ]
  })
);
