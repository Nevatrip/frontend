block( 'page' ).mod( 'route', 'error' )(
  mods()( node => {
    const err = node.data.api.serviceBasedData.error;

    return [
      {
        block: 'title',
        mods: { view: 'xl' },
        url: node._urlFor( ( ( ( err || {} ).errorImage || {} ).asset || {} )._ref ).url() || '',
        title: ( ( err || {} ).errorTitle || {} )[node.currentLang]
      },
      {
        block: 'page',
        elem: 'content',
        elemMods: { view: 'narrow' },
        content: [
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
                    html: node._marked( ( ( err || {} ).errorContent || {} )[node.currentLang] || '' ) || ''
                  },
                  node.data.api.servicesRandom && {
                    block: 'page',
                    elem: 'row',
                    content: {
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
                  },
                  {
                    block: 'page',
                    elem: 'row',
                    content: {
                      block: 'link',
                      content: { html: ( ( err || {} ).errorMoreLink || {} )[node.currentLang] || '' },
                      url: `/${ node.data.params.project }/${ node.data.params.lang }`
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
                    block: 'page',
                    elem: 'article',
                    elemMods: { type: 'info' },
                    heading: node._marked( ( ( err || {} ).errorInfoTitle || {} )[node.currentLang] || '' ) || '',
                    text: node._marked( ( ( err || {} ).errorInfoText || {} )[node.currentLang] || '' ) || ''
                  }
                ]
              }
            ]
          }
        ]
      }
    ];
  } ),
);
