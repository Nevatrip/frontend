block( 'service' ).mod( 'view', 'list-item-lg' )(
  tag()( 'article' ),
  content()( ( node, { service, lang, moreText, serviceAlias, servicePriceOutside, currency } ) => {
    const currentLang = ( ( node.data || {} ).params || {} ).lang || lang;
    const {
      title,
      features,
      price,
      priceOld,
      mainUrl
    } = service;
    const linkParamsService = ( ( title[currentLang] || {} ).key || {} ).current || serviceAlias || '//';
    const serviceTitle = ( title[currentLang] || {} ).name || '';

    if( linkParamsService !== '//' ) {
      return [
        {
          elem: 'content',
          content: [
            {
              block: 'page',
              elem: 'row',
              elemMods: { xs: 'column' },
              content: [
                {
                  block: 'service',
                  elem: 'image',
                  elemMods: { size: 'third' },
                  mix: { block: 'page', elem: 'col' },
                  content: [
                    {
                      block: 'link',
                      url: mainUrl,
                      content: {
                        block: 'image',
                        mods: { view: 'bg' },

                        url: service.serviceImgUrl || '',
                        alt: serviceTitle,
                        title: serviceTitle
                      }
                    }
                  ]
                },
                {
                  block: 'service',
                  elem: 'aside-content',
                  mix: { block: 'page', elem: 'col' },
                  content: [
                    {
                      block: 'heading',
                      mods: { size: 'l' },
                      mix: { block: 'service', elem: 'title', elemMods: { view: 'sm' } },
                      content: [
                        {
                          block: 'link',
                          mods: { view: 'inherit' },
                          url: mainUrl,
                          title: serviceTitle,
                          content: serviceTitle
                        }
                      ]
                    },
                    ( features || {} )[currentLang] && {
                      block: 'list',
                      mods: { type: 'check', size: 'sm' },
                      items: features[currentLang].split( '\n' ).map( item => ( {
                        html: item
                      } ) )
                    },
                    {
                      block: 'page',
                      elem: 'row',
                      elemMods: { view: 'service-list-item-lg' },
                      content: [
                        price && {
                          block: 'service',
                          elem: 'price',
                          elemMods: { view: 'sm' },
                          content: `${ price }&nbsp;${ currency }`
                        },
                        {
                          block: 'link',
                          mods: { view: 'button' },
                          content: {
                            html: `${ moreText ? moreText : ( ( ( ( node.data || {} ).api || {} ).settingService || {} ).serviceViewListItemLgMore || {} )[currentLang] || '' }`
                          },
                          url: mainUrl,
                          title: serviceTitle
                        }
                      ]
                    },
                    priceOld && {
                      block: 'service',
                      elem: 'price-outside',
                      content: `${ priceOld } ${ currency }`,
                      currentLang,
                      servicePriceOutside
                    }
                  ]
                }
              ]
            },
            {
              block: 'page',
              elem: 'row',
              content: [
                {
                  block: 'page',
                  elem: 'hr',
                  elemMods: { size: 'md' }
                }
              ]
            }
          ]
        }
      ]
    }
  } ),
);
