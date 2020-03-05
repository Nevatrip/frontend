block( 'schema' )(
  {
    attrs: {
      'aria-hidden': 'true'
    },
  },
  content()( ( node, ctx ) => [
    {
      content: ctx.content
    }
  ] )
);
