block( 'header' ).elem( 'contacts' )(
  replace()( [
    {
      block: 'contacts',
      mix: { block: 'header', elem: 'contacts' },
      mods: { view: 'header' }
    }
  ] )
);
