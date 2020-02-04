block( 'page' ).mod( 'route', 'blogDetail' )(
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
        mods: { view: 'detail' },
        settingBlog: node.data.api.settingBlog,
        blog: node.data.api.blog,
        blogOffset: node.data.api.blogOffset,
        settingSocials: node.data.api.settingSocials,
        tenRandomBlogs: node.data.api.tenRandomBlogs
      }
    ]
  } ),
);

