block( 'schema' )(
  content()( ( node, ctx ) => [
    {
      content: ctx.content
    }
  ] )
);
