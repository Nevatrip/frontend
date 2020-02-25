block( 'page' ).mod( 'route', 'cart' )(
  mods()( ( { data: { session } } ) => [
    {
      block: 'cart',
      attrs: {
        id: 'root',
        lang: 'en',
        'data-session': session
      }
    }
  ] ),
);

