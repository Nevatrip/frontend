block( 'logo' ).elem( 'image' )(
  content()( ( node, ctx ) => ( {
    block: 'image',
    mix: { block: node.block, elem: node.elem },
    url: ctx.logo,
    alt: ctx.logoTitle,
    title: ctx.logoTitle
  } ) )
);
