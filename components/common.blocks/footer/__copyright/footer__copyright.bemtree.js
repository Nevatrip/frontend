block( 'footer' ).elem( 'copyright' )(
  content()( ( node, ctx ) => [
    {
      content: {
        html: node._copyright
      }
    }
  ] )
);
