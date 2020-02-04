block( 'schema' ).elem( 'itemprop' ).elemMod( 'type', 'img' )(
  tag()( 'img' ),
  addAttrs()( ( node, ctx ) => ( {
    itemprop: ctx.itemprop,
    src: ctx.src,
    height: 0,
    width: 0
  } ) )
);
