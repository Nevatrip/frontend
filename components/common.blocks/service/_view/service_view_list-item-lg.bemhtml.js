block( 'service' ).mod( 'view', 'list-item-lg' )(
  tag()( 'article' ),
  content()( ( node, { service } ) => {
    // console.log( '↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓' );
    // console.log( 'currentLang: ', currentLang );
    // console.log( '______________________________' );


    //const currentLang = node.data.params.lang;
    const currentLang = 'en';

    const {
      titleImage,
      title,
      features,
      price,
      priceOld,
      category
    } = service;

    const linkParamsService = ( ( title[currentLang] || {} ).key || {} ).current || '//';
    const linkParamsCategory = ( ( ( ( category || {} ).title || {} )[currentLang] || {} ).key || {} ).current || '//';
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
                      to: 'service',
                      params: {
                        category: linkParamsCategory,
                        service: linkParamsService
                      },
                      content: {
                        block: 'image',
                        mods: { view: 'bg' },
                        url: titleImage || '',
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
                          to: 'service',
                          params: {
                            category: linkParamsCategory,
                            service: linkParamsService
                          },
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
                          content: price
                        },
                        {
                          block: 'link',
                          mods: { view: 'button' },
                          // content: {
                          //   html: `${ ( ( node.data.api.settingService || {} ).serviceViewListItemLgMore || {} )[currentLang] || '' }&nbsp;&rarr;`
                          // },
                          to: 'service',
                          params: {
                            category: linkParamsCategory,
                            service: linkParamsService
                          },
                          title: serviceTitle
                        }
                      ]
                    },
                    priceOld && {
                      block: 'service',
                      elem: 'price-outside',
                      content: priceOld
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
