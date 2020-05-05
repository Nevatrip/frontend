block( 'page' ).mod( 'route', 'sitemap' )(
  mods()( node => {
    const serviceBasedData = node.data.api.serviceBasedData;
    const currentLang = node.data.params.lang;
    const sitemapImg = node.data.api.sitemapImg;
    const sitemapArr = node.data.api.sitemapArr;

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
        url: sitemapImg || '',
        title: ( ( ( serviceBasedData || {} ).sitemap || {} ).sitemapTitle || {} )[currentLang] || ''
      },
      {
        block: 'page',
        elem: 'content',
        content: [
          {
            block: 'breadcrumbs',
            title: ( ( ( serviceBasedData || {} ).sitemap || {} ).sitemapTitle || {} )[currentLang] || ''
          },
          {
            block: 'list',
            mods: {
              type: 'disk',
              size: 'md'
            },
            content: sitemapArr.map( page => [
              {
                block: 'list',
                elem: 'item',
                content: {
                  block: 'link',
                  to: page.to,
                  params: page.params,
                  title: page.title,
                  content: [
                    page.title,
                    page.inner && {
                      block: 'list',
                      mods: {
                        type: 'disk',
                        size: 'md'
                      },
                      content: page.inner.map( inner => [
                        inner.to && {
                          block: 'list',
                          elem: 'item',
                          content: {
                            block: 'link',
                            to: inner.to,
                            params: inner.params,
                            title: inner.title,
                            content: inner.title
                          }
                        }
                      ] )
                    }
                  ]
                }
              }
            ] )
          }
        ]
      }
    ]
  } ),
);

