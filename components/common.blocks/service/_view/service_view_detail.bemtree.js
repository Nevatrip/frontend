block('service').mod('view', 'detail')(
  content()((node, { service }) => {

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
      photos,
      attractions,
      priceDescription,
      tourLanguage,
      gallery

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
                    excursion: tourLanguage ? tourLanguage.map( item => ( item && {url: item.icon.url, name: item.title})) : '',
                    routeMap: routeMap || '',
                    placeFeatures:  placeFeatures ? placeFeatures.map( item => ( item && {url: item.icon.url, name: item.title})) : '',
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
                    content: {
                      price: price || '',
                      priceOutside: priceOld || '',
                      title: title || '',
                      urlBuy: key.current ? (key.current + '#buy') : '',
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
            elemMods: {sm: 'column'},
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
                  description && {
                    block: 'page',
                    elem: 'text',
                    content: {
                      html: marked(description) || ''
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
                  {
                    block: 'heading',
                    mods: {size: 'xl'},
                    content: {
                      html: 'Вы&nbsp;увидите'
                    },
                  },
                  attractions && {
                    block: 'list',
                    items: (attractions.map(item=>(item.title))) || [],
                    mods: {type: 'disk', size: 'md'}
                  },
                  {
                    block: 'heading',
                    mods: {size: 'xl'},
                    content: {
                      html: priceDescription || '',
                    },
                  },
                  {
                    block: 'service',
                    elem: 'buy',
                    content: {
                      price: price || '',
                      priceOutside: priceOld || '',
                      title: title || '',
                      urlBuy: key.current ? (key.current + '#buy') : '',
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
                    // url: ctx.content.url,
                    // image: ctx.content.img,
                    // title: ctx.content.title,
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
