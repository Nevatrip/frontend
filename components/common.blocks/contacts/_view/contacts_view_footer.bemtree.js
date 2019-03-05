block( 'contacts' ).mod( 'view', 'footer' )(
  content()( ( node, ctx ) => [
    {
      elem: 'email',
      email: node._contacts.email
    },
    {
      elem: 'tel',
      tel: node._contacts.tel
    },
    {
      content: {
        block: 'contacts',
        elem: 'social',
        social: node._contacts.social
      }
    }
  ] )
);
