block( 'page' ).mod( 'route', 'servicesByCollection' )(
  mods()( node => [
    {
      block: 'title',
      mods: { view: 'xl' },
      url: node._urlFor( node.data.api.serviceCategoryFull.titleImage.asset._ref ).url() || '',
      title: '123'
    },
    node.data.api.services && {
      block: 'page',
      elem: 'content',
      content: {
        block: 'list',
        mods: { view: 'no-style' },
        content: node.data.api.services.map( item => ( {
          elem: 'item',
          content: {
            block: 'service',
            mods: { view: 'list-item-lg' },
            service: item
          }
        } ) )
      }
    }
  ] ),
);
