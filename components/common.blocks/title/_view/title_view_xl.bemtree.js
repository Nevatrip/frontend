block( 'title' ).mod( 'view', 'xl' )(
  content()( ( node, ctx ) => [
    {
      elem: 'img',
      url: ctx.url,
      title: ctx.title
    },
    {
      block: 'page',
      elem: 'content',
      content: {
        block: 'heading',
        mods: { size: 'xxl' },
        mix: { block: 'title', elem: 'name' },
        content: ctx.title
      }
    }
  ] )
);
