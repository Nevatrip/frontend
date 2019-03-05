block( 'contacts' ).mod( 'view', 'header' )(
  content()( node => [
    {
      elem: 'email',
      email: node._contacts.email
    },
    {
      elem: 'tel',
      tel: node._contacts.tel
    }
  ] )
);
