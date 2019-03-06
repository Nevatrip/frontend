block( 'contacts' ).elem( 'social' )(
  replace()( ( node, ctx ) => ctx.social && ctx.social.map( item => ( {
    block: 'link',
    content: { html: item.img },
    title: item.name,
    url: item.url,
    mix: { block: node.block, elem: node.elem },
    target: '_blank'
  } ) ) )
);
