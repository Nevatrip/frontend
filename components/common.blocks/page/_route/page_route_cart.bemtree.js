block( 'page' ).mod( 'route', 'cart' )(
  mods()( ( { data: { session, params: { lang } } } ) => [
    {
      block: 'cart',
      attrs: {
        id: 'root',
        lang,
        translate: 'no',
        'data-session': session
      }
    }
  ] ),
);

