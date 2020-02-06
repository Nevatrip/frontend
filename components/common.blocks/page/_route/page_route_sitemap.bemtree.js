block( 'page' ).mod( 'route', 'sitemap' )(
  mods()( node => {
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
        block: 'cart',
        elem: 'wrapper',
        content: {
          block: 'page',
          elem: 'content',
          elemMods: { view: 'cart' },
          content: {
            block: 'cart'
          }
        }
      }
    ]
  } ),
);

