block('header').elem('contacts')(
  replace()( ( node, ctx ) => {
    return [
      {
        block: 'contacts',
        mix:  { block: 'header', elem: 'contacts' },
        mods: { view: 'header' }
      }
    ]
  } )
);
