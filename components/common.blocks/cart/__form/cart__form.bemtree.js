block( 'cart' ).elem( 'form' )(
  replace()( ( { block, elem, currentLang, sessionId }, ctx ) => ( {
    block: 'form',
    mods: { view: 'cart' },
    mix: { block, elem },
    method: 'get',
    content: 'CART CART CART',
    attrs: [
      {
        lang: currentLang,
        session: sessionId
      }
    ]
  } ) ),
);
