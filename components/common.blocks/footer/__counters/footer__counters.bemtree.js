block( 'footer' ).elem( 'counters' )(
  content()( ( node, ctx ) => [
    {
      html: ctx.counters.join( '\r\n' )
    }] )
);
