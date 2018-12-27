block('header').elem('contacts')(
  content()( ( node, ctx ) => {
    return [
      {
        block: 'link',
        mix:  { block: 'header', elem: 'contact' },
        content: node._phone,
        url: 'tel:' + node._phone
      },
      {
        block: 'link',
        mix:  { block: 'header', elem: 'contact' },
        content: node._email,
        url: 'mailto:' + node._email
      }
    ]
  } )
);
