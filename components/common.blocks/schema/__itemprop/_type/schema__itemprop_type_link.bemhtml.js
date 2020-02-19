block( 'schema' ).elem( 'itemprop' ).elemMod( 'type', 'img' )(
  tag()( 'link' ),
  addAttrs()( ( node, ctx ) => ( {
    itemprop: 'url',
    content: ctx.content
  } ) )
);
