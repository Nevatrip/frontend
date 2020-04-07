block( 'page' ).mod( 'route', 'error' )(
  mods()( node => {
    const err = node.data.api.serviceBasedData.error;
    const serviceBasedData = node.data.api.serviceBasedData;
    const currentLang = node.data.params.lang;

    return [
      {
        block: 'schema',
        mods: { type: 'organization' },
        name: ( serviceBasedData.title || {} )[currentLang] || '',
        description: ( serviceBasedData.shortDescription || {} )[currentLang] || '',
        logo: node._urlFor( ( ( ( serviceBasedData || {} ).logo || {} ).asset || {} )._ref ).url() || '',
        email: ( serviceBasedData.email || {} )[currentLang] || '',
        telephone: ( serviceBasedData.tel || {} )[currentLang] || ''
      },
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
                      url: `/`
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
