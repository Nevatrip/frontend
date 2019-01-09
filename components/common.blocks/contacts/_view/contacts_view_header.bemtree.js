block('contacts').mod('view', 'header')(
  content()( ( node, ctx ) => {
    return [
      {
        elem: 'email',
        email: node._contacts.email,
      },
      {
        elem: 'tel',
        tel: node._contacts.tel,
      },
    ]
  } )
);
