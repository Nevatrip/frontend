block( 'blog' ).elem( 'intro-img' )(
  attrs()( ( node, ctx ) => ( {
    style: `;background-image:url(${ ctx.img });`
  } ) ),
);
