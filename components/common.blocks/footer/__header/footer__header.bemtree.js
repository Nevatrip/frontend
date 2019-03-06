block( 'footer' ).elem( 'header' )(
  content()( () => ( {
    elem: 'content',
    mix: { block: 'page', elem: 'row', elemMods: { sm: 'column' } },
    content: [
      {
        elem: 'awards'
      },
      {
        block: 'contacts',
        mods: { view: 'footer' }
      }
    ]
  } ) )
);
