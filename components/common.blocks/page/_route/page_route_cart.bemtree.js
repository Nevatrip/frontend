block( 'page' ).mod( 'route', 'cart' )(
  mods()( () => [
    {
      block: 'title',
      mods: { view: 'xl' },
      url: '',
      title: 'Корзина'
    },
    {
      block: 'page',
      elem: 'content',
      content: {
        block: 'cart'
      }
    }
  ] ),
);

