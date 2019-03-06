block( 'service' ).elem( 'features' )(
  content()( ( node, ctx ) => [
    {
      block: 'list',
      mods: { type: 'disk', size: 'md' },
      items: ctx.content
    }
  ] )
);

