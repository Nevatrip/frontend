block( 'page' ).mod( 'route', 'blog' )(
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
        block: 'blog',
        mods: { view: 'home-page' },
        settingBlog: node.data.api.settingBlog,
        settingSocials: node.data.api.settingSocials,
        theLatestBlog: node.data.api.theLatestBlog,
        blogOffset: node.data.api.blogOffset
      }
    ]
  }),
);

