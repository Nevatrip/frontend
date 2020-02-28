block( 'contacts' ).elem( 'social' )(
  replace()( ( node, ctx ) => ( ctx || {} ).social && ctx.social.map( item => ( {
    block: 'link',
    content: {
      block: 'image',
      url: item.img,
      alt: item.name
    },
    title: item.name,
    url: item.url,
    mix: { block: node.block, elem: node.elem },
    target: '_blank'
  } ) ) )
);
