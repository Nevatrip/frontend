block( 'navigation' ).elem( 'toggle' )(
  content()( ( node, ctx ) => ( {
    html: ctx.content
  } ) )
);
