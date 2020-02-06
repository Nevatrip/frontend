block( 'page' ).mod( 'route', 'article' )(
  mods()( node => {
      const article = node.data.api.article[0];
      const currentLang = node.data.params.lang;

      return [
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
