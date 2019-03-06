block( 'filter' ).elem( 'heading' )(
  replace()( ( node, ctx ) => ( {
    block: 'heading',
    mods: { size: 'xl' },
    mix: { block: node.block, elem: node.elem },
    content: ctx.content
  } ) )
);
