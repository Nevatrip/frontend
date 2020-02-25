block( 'service' ).elem( 'price' )(
  content()( ( node, ctx ) => ( {
    html: ctx.content
  }
  ) )
);
