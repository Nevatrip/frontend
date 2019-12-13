block( 'title' ).elem( 'logo' )(
  replace()( ( node, ctx ) => [
    {
      block: 'image',
      mix: { block: node.block, elem: node.elem },
      url: ctx.url || '',
      title: ctx.title || '',
      alt: ctx.title || ''
    }
  ] )
);
