block( 'page' ).mod( 'route', 'cart' )(
  mods()( () => [
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
  ] ),
);

