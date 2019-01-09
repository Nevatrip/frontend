block('header').elem('contacts')(
  replace()( ( node, ctx ) => {
    return [
      // {
      //   block: 'link',
      //   mix:  { block: 'header', elem: 'contact' },
      //   content: node._email,
      //   url: 'mailto:' + node._email
      // },
      // {
      //   block: 'link',
      //   mix:  { block: 'header', elem: 'contact' },
      //   content: node._phone,
      //   url: 'tel:' + node._phone
      // },
      {
        block: 'contacts',
        mix:  { block: 'header', elem: 'contacts' },
        mods: { view: 'header' }
      }
    ]
  } )
);
