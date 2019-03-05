block( 'header' ).elem( 'slogan' ).elemMod( 'is-heading', true )(
  replace()( ( node, ctx ) => ( {
    block: 'heading',
    mods: { size: 'xxl' },
    mix: { block: node.block, elem: node.elem, elemMods: node.elemMods },
    content: ctx.slogan
  } ) ),
);
