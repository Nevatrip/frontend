block( 'footer' ).elem( 'header' )(
  content()( ( node, ctx ) => ( {
    elem: 'content',
    mix: { block: 'page', elem: 'row', elemMods: { sm: 'column' } },
    content: [
      {
        elem: 'awards'
      },
      {
        block: 'contacts',
        mods: { view: 'footer' },
        social: ctx.social
      }
    ]
  } ) )
);
