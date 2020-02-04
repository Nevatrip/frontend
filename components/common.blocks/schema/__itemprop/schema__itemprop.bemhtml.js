block( 'schema' ).elem( 'itemprop' )(
  tag()( 'meta' ),
  addAttrs()( ( node, ctx ) => ( {
    itemprop: ctx.itemprop,
    itemscope: ctx.itemscope,
    itemtype: ctx.itemtype,
    content: ctx.content
  } ) )
);
