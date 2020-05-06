block( 'service' ).mod( 'view', 'banner' )(
  content()( ( node, { service, bannerLink, bannerImg, bannerTitle, bannerImgSm } ) => {
    const currentLang = node.data.params.lang;

    if( service ) {
      const {
        titleImage,
        title,
        features,
        price,
        priceOld,
        category,
        buyLink
      } = service;

      const linkParamsService = ( ( title[currentLang] || {} ).key || {} ).current || '//';
      const linkParamsCategory = ( ( ( category || {} ).title || {} )[currentLang] || {} ).key.current || '//';
      const serviceTitle = ( title[currentLang] || {} ).name || '';

      if( linkParamsService !== '//' ) {
        return [
          {
            block: 'image',
            mods: { view: 'bg' },
            url: titleImage || '',
            alt: serviceTitle,
            title: serviceTitle
          },
          {
            elem: 'content',
            mix: { block: 'page', elem: 'content' },
            content: [
              {
                elem: 'blank',
                content: [
                  title && {
                    block: 'heading',
                    mods: { size: 'l' },
                    mix: { block: 'service', elem: 'title', elemMods: { view: 'md' } },
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
                    mods: { type: 'check-in-disk', size: 'xl' },
                    items: features[currentLang].split( '\n' ).map( item => ( {
                      html: node._marked( item )
                    } ) )
                  },
                  {
                    block: 'page',
                    elem: 'row',
                    elemMods: { view: 'service-banner' },
                    content: [
                      ( buyLink || {} )[currentLang] && {
                        block: 'service',
                        elem: 'buy',
                        price,
                        priceOutside: priceOld,
                        title: serviceTitle,
                        urlBuy: buyLink[currentLang]
                      },
                      {
                        block: 'service',
                        elem: 'more',
                        route: 'service',
                        params: {
                          category: linkParamsCategory,
                          service: linkParamsService
                        },
                        title: serviceTitle
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      }
    } else {
      return [
        {
          block: 'link',
          mix: { block: 'service', elem: 'banner', elemMods: { view: 'lg' } },
          url: bannerLink,
          title: bannerTitle,
          attrs: {
            style: `background-image: url(${ bannerImg });`
          },
          content: {
            block: 'image',
            alt: bannerTitle,
            url: bannerImg,
            attrs: {
              style: 'position: relative;\n' +
                '    display: block;\n' +
                '    max-width: 100%;\n' +
                '    margin: 0 auto;'
            }
          }
        },
        {
          block: 'link',
          mix: { block: 'service', elem: 'banner', elemMods: { view: 'sm' } },
          url: bannerLink,
          title: bannerTitle,
          attrs: {
            style: `background-image: url(${ bannerImgSm });`
          },
          content: {
            block: 'image',
            alt: bannerTitle,
            url: bannerImgSm,
            attrs: {
              style: 'position: relative;\n' +
                '    display: block;\n' +
                '    max-width: 100%;\n' +
                '    margin: 0 auto;'
            }
          }
        }
      ]
    }
  } ),
);
