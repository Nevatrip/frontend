block( 'service' ).elem( 'text' )(
  content()( ( node, ctx ) => ( {
    content: ctx.content
  } ) )
);
