block( 'service' ).mod( 'view', 'detail' )(
  content()( ( node, { service, currency, currentLang } ) => {

    const {
      _id: id,
      breadcrumb,
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
      pricesDescription,
      buyLink

      // time,
    } = service;

    const serviceTitle = ( title[currentLang] || {} ).name || '';
    const fullSchedule = (( service.directions || [] )[0] || {}).schedule || [];

    return [
      {
        block: 'title',
        mods: { view: 'xl' },
        url: titleImage || '',
        title: serviceTitle || ''
      },
      {
        block: 'page',
        elem: 'content',
        elemMods: { view: 'narrow' },
        content: [
          {
            block: 'breadcrumbs',
            title: ( breadcrumb || {} )[currentLang] || serviceTitle || '',
            category: ( ( ( ( service.category || {} ).title || {} )[currentLang] || {} ).key || {} ).current || '',
            categoryTo: 'servicesByCategory',
            categoryName: ( ( ( service.category || {} ).title || {} )[currentLang] || {} ).name || ''
          },
          {
            block: 'page',
            elem: 'row',
            elemMods: { sm: 'column' },
            content: [
              {
                block: 'page',
                elem: 'col',
                elemMods: { view: 'main' },
                content: [
                  {
                    block: 'service',
                    elem: 'description',
                    duration: ( duration || {} )[currentLang] || '',
                    time: ( schedule || {} )[currentLang] || '',
                    fromPoint: point,
                    vehicle: ( ( place || {} ).title || {} )[currentLang] || '',
                    excursion: tourLanguage ? tourLanguage.map( item => item && {
                      url: ( ( item || {} ).icon || {} ).url || '',
                      name: ( item || {} ).title || ''
                    } ) : '',
                    routeMap: routeMap || '',
                    placeFeatures: placeFeatures ? placeFeatures.map( item => item && {
                      url: ( ( item || {} ).icon || {} ).url || '',
                      name: ( item || {} ).title || ''
                    } ) : ''
                  }
                ]
              },
              {
                block: 'page',
                elem: 'col',
                elemMods: { view: 'aside' },
                content: [
                  {
                    block: 'service',
                    elem: 'price-info',
                    discount: sale || '',
                    pricesDescription: ( pricesDescription || {} )[currentLang] || '',
                    prevention: ( prevention || {} )[currentLang] || '',
                    lang: [currentLang]
                  },

                  // TODO: отвязаться от urlBuy — вынести как отдельный метод/модификатор

                  price && { // на странице 2 кнопки купить не забываем про вторую
                    block: 'service',
                    elem: 'buy',
                    id,
                    price: `${ price } ${ currency }`,
                    priceOutside: `${ priceOld } ${ currency }`,
                    title: serviceTitle || '',
                    noDirectionBtn: node.data.api.settingService.noDirectionBtn[currentLang],
                    fullSchedule: fullSchedule.length !== 0

                    // urlBuy: buyLink[currentLang]
                  }
                ]
              }
            ]
          },
          {
            block: 'page',
            elem: 'hr'
          },
          {
            block: 'page',
            elem: 'row',
            elemMods: { sm: 'column' },
            content: [
              {
                block: 'page',
                elem: 'col',
                elemMods: { view: 'main' },
                content: [
                  ( description || {} )[currentLang] && {
                    block: 'heading',
                    mods: { size: 'xl' },
                    content: {
                      html: ( ( node.data.api.settingService || {} ).serviceViewDetailDescription || {} )[currentLang] || ''
                    }
                  },
                  ( descriptionPrepend || {} )[currentLang] && {
                    block: 'service',
                    elem: 'remark',
                    content: {
                      html: node._marked( descriptionPrepend[currentLang] ) || ''
                    }
                  },
                  ( description || {} )[currentLang] && {
                    block: 'page',
                    elem: 'text',
                    content: {
                      html: node._marked( description[currentLang] ) || ''
                    }
                  },
                  ( descriptionAppend || {} )[currentLang] && {
                    block: 'service',
                    elem: 'remark',
                    content: {
                      html: node._marked( descriptionAppend[currentLang] ) || ''
                    }
                  },
                  {
                    block: 'page',
                    elem: 'hr',
                    attrs: {
                      id: 'map'
                    },
                    elemMods: { view: 'short' }
                  },
                  routeMap && [
                    {
                      block: 'heading',
                      mods: { size: 'xl' },
                      content: {
                        html: ( ( node.data.api.settingService || {} ).serviceViewDetailRouteMap || {} )[currentLang] || ''
                      }
                    },
                    {
                      block: 'page',
                      elem: 'iframe-container',
                      content: {
                        iframe: routeMap,
                        height: '400',
                        width: '100%'
                      },
                      mix: {
                        block: 'service',
                        elem: 'map'
                      }
                    }
                  ],
                  ( advice || {} )[currentLang] && {
                    block: 'service',
                    elem: 'advice',
                    content: [
                      {
                        block: 'heading',
                        mods: { size: 'm' },
                        content:
                          {
                            html: ( ( node.data.api.settingService || {} ).serviceViewDetailAdvice || {} )[currentLang] || ''
                          }
                      },
                      {
                        html: node._marked( advice[currentLang] ) || ''
                      }
                    ]
                  }
                ]
              },
              {
                block: 'page',
                elem: 'col',
                elemMods: { view: 'aside' },
                content: [
                  gallery && [
                    {
                      block: 'heading',
                      mods: { size: 'xl' },
                      content: {
                        html: ( ( node.data.api.settingService || {} ).serviceViewDetailGallery || {} )[currentLang] || ''
                      }
                    },
                    {
                      block: 'service',
                      elem: 'gallery',
                      photos: gallery
                    }
                  ],
                  ( attractions || {} ).length > 0 && [
                    {
                      block: 'heading',
                      mods: { size: 'xl' },
                      content: {
                        html: ( ( node.data.api.settingService || {} ).serviceViewDetailAttractions || {} )[currentLang] || ''
                      }
                    },
                    {
                      block: 'list',
                      items: attractions.map( item => item.title[currentLang] ) || [],
                      mods: { type: 'check', size: 'md' }
                    }
                  ],
                  ( priceDescription || {} )[currentLang] && {
                    block: 'heading',
                    mods: { size: 'xl' },
                    content: {
                      html: node._marked( priceDescription[currentLang] ) || ''
                    }
                  },
                  price && { // на странице 2 кнопки купить не забываем про вторую
                    block: 'service',
                    elem: 'buy',
                    id,
                    price: `${ price } ${ currency }`,
                    priceOutside: `${ priceOld } ${ currency }`,
                    title: serviceTitle || '',
                    noDirectionBtn: node.data.api.settingService.noDirectionBtn[currentLang],
                    fullSchedule: fullSchedule.length !== 0

                    // urlBuy: buyLink[currentLang]
                  },
                  {
                    block: 'page',
                    elem: 'hr'
                  },
                  node.data.api.servicesRandom.filter( item => item.title[currentLang] ).length > 0 && [
                    {
                      block: 'heading',
                      mods: { size: 'xl' },
                      content: {
                        html: ( ( node.data.api.settingService || {} ).serviceViewDetailSame || {} )[currentLang] || ''
                      }
                    },
                    {
                      block: 'list',
                      mods: { view: 'no-style', sm: 'inline' },
                      content: node.data.api.servicesRandom.map( item => ( {
                        elem: 'item',
                        content: {
                          block: 'service',
                          mods: { view: 'list-item-sm' },
                          service: item
                        }
                      } ) )
                    }
                  ]
                ]
              }
            ]
          }
        ]
      }
    ]
  } )
);
