block( 'footer' ).elem( 'copyright' )(
  content()( node => [
    {
      content: {
        html: node._copyright
      }
    }
  ] )
);
