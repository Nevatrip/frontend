block( 'header' ).elem( 'contacts' )(
  replace()( ( node, ctx ) => [
    {
      block: 'contacts',
      mix: { block: 'header', elem: 'contacts' },
      mods: { view: 'header' }
    }
  ] )
);
