block( 'page' ).mod( 'route', 'servicesByCategory' )(
  mods()( node => [
    {
      block: 'title',
      mods: { view: 'xl' },
      url: node._urlFor( node.data.api.serviceCategoryFull.titleImage.asset._ref ).url() || '',
      title: ( ( ( ( node.data.api || {} ).serviceCategoryFull || {} ).title || {} )[node.currentLang] || {} ).name || ''
    },
    {
      block: 'page',
      elem: 'content',
      content: {
        block: 'list',
        mods: { view: 'no-style' },
        content: node.data.api.services.map(item => ({
          elem: 'item',
          content: {
            block: 'service',
            mods: {view: 'list-item-lg'},
            service: item
          }
        } ) )
      }
    }
  ] ),
);

