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

    const serviceTitle = ((title[currentLang] || {}).name) || '';

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
                    duration: (duration || {})[currentLang] || '',
                    time: (schedule || {})[currentLang] || '',
                    fromPoint: ((point || {}).title || {} )[currentLang] || '',
                    vehicle: ((place || {}).title || {})[currentLang] || '',
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
                    prevention: (prevention || {})[currentLang] || ''
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
                  (description || {})[currentLang] && {
                    block: 'heading',
                    mods: {size: 'xl'},
                    content: {
                      html: ((node.data.api.settingService || {}).serviceViewDetailDescription || {})[currentLang] || ''
                    }
                  },
                  (descriptionPrepend || {})[currentLang] && {
                    block: 'service',
                    elem: 'remark',
                    content: {
                      html: marked(descriptionPrepend[currentLang]) || ''
                    }
                  },
                  (description || {})[currentLang] && {
                    block: 'page',
                    elem: 'text',
                    content: {
                      html: marked(description[currentLang]) || ''
                    }
                  },
                  (descriptionAppend || {})[currentLang] && {
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
                        html: ((node.data.api.settingService || {}).serviceViewDetailRouteMap || {})[currentLang] || ''
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
                  (advice || {})[currentLang] && {
                    block: 'service',
                    elem: 'advice',
                    content: [
                      {
                        block: 'heading',
                        mods: {size: 'm'},
                        content:
                          {
                            html: ((node.data.api.settingService || {}).serviceViewDetailAdvice || {})[currentLang] || ''
                          },
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
                        html: ((node.data.api.settingService || {}).serviceViewDetailGallery || {})[currentLang] || ''
                      },
                    },
                    {
                      block: 'service',
                      elem: 'gallery',
                      photos: gallery,
                    },
                  ],
                  ((attractions || {}).length > 0) && [
                    {
                      block: 'heading',
                      mods: {size: 'xl'},
                      content: {
                        html: ((node.data.api.settingService || {}).serviceViewDetailAttractions || {})[currentLang] || ''
                      },
                    },
                    {
                      block: 'list',
                      items: (attractions.map(item => (item.title[currentLang]))) || [],
                      mods: {type: 'check', size: 'md'}
                    },
                  ],
                  (priceDescription || {})[currentLang] && {
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
                  (node.data.api.servicesRandom.filter( item => item.title[node.currentLang]).length) > 0 && [
                    {
                      block: 'heading',
                      mods: {size: 'xl'},
                      content: {
                        html: ((node.data.api.settingService || {}).serviceViewDetailSame || {})[currentLang] || ''
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
