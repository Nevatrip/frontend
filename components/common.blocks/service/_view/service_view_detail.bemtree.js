block('service').mod('view', 'detail')(
  content()((node, {service}) => {

    const currentLang = node.data.params.lang;

    const {
      titleImage,
      title,
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
      prevention,
      advice,
    } = service;

    const serviceTitle = (title[currentLang] && title[currentLang].name) ? title[currentLang].name : '';

    return [
      {
        block: 'title',
        mods: {view: 'xl'},
        url: titleImage || '',
        title: serviceTitle,
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
                    duration: duration && duration[currentLang] ? duration[currentLang] : '',
                    time: schedule && schedule[currentLang] ? schedule[currentLang] : '',
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
                    prevention: prevention && prevention[currentLang] ? prevention[currentLang] : ''
                  },
                  (price || priceOld) && {
                    block: 'service',
                    elem: 'buy',
                    price: price || '',
                    priceOutside: priceOld || '',
                    title: serviceTitle,
                    urlBuy: '#buy',
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
                  description && description[currentLang] && {
                    block: 'heading',
                    mods: {size: 'xl'},
                    content: {
                      html: 'Об&nbsp;экскурсии'
                    }
                  },
                  descriptionPrepend && descriptionPrepend[currentLang] && {
                    block: 'service',
                    elem: 'remark',
                    content: {
                      html: marked(descriptionPrepend[currentLang]) || ''
                    }
                  },
                  description && description[currentLang] && {
                    block: 'page',
                    elem: 'text',
                    content: {
                      html: marked(description[currentLang]) || ''
                    }
                  },
                  descriptionAppend && descriptionAppend[currentLang] && {
                    block: 'service',
                    elem: 'remark',
                    content: {
                      html: marked(descriptionAppend[currentLang]) || ''
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
                  advice && advice[currentLang] && {
                    block: 'service',
                    elem: 'advice',
                    content: [
                      {
                        block: 'heading',
                        mods: {size: 'm'},
                        content: {html:'Совет от&nbsp;организатора'},
                      },
                      {
                        html: marked(advice[currentLang]) || ''
                      }]
                  },
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
                  (attractions && attractions.length > 0) && [
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
                  priceDescription && priceDescription[currentLang] && {
                    block: 'heading',
                    mods: {size: 'xl'},
                    content: {
                      html: marked(priceDescription[currentLang]) || '',
                    },
                  },
                  (price || priceOld) && {
                    block: 'service',
                    elem: 'buy',
                    price: price || '',
                    priceOutside: priceOld || '',
                    title: serviceTitle,
                    urlBuy: '#buy',
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
