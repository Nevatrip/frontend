block( 'footer' ).elem( 'counters' )(
  content()( ( node, ctx ) => [
    {
      content: ctx.counters.map( item => ( {
        html: item
      } ) )
    }] )
);
