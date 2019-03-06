block( 'page' ).elem( 'iframe-container' )(
  content()( ( node, ctx ) => [
    {
      tag: 'iframe',
      attrs: {
        src: ctx.content.iframe,
        width: ctx.content.width,
        height: ctx.content.height
      }
    }
  ] )
);
