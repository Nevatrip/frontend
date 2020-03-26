block( 'page' ).mod( 'route', 'cart' )(
  mods()( ( { data: { session, params: { lang } } } ) => [
    // {
    //   tag: 'meta',
    //   attrs: {
    //     name: 'google',
    //     content: 'notranslate'
    //   }
    // },
    {
      block: 'cart',
      mix: { block: 'notranslate' },
      attrs: {
        id: 'root',
        lang,
        'data-session': session
      }
    }
  ] ),
);

