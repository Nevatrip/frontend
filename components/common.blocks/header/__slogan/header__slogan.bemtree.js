block( 'header' ).elem( 'slogan' )(
  replace()( ( node, ctx ) => [
    {
      block: 'heading',
      mix: { block: node.block, elem: node.elem },
      content: ctx.slogan
    }
  ] )
);
