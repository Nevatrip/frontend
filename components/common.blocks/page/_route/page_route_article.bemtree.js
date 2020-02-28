block( 'page' ).mod( 'route', 'article' )(
  mods()( node => {
    const article = node.data.api.article[0];
    const currentLang = node.data.params.lang;
    const serviceBasedData = node.data.api.serviceBasedData;

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
        url: article.img || '',
        title: ( ( article.title || {} )[currentLang] || {} ).name || ''
      },
      {
        block: 'page',
        elem: 'content',
        content: {
          html: ( article.content || {} )[currentLang] || ''
        }
      }
    ]
  }
  ),
);
