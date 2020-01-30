block( 'cart' )(
  tag()( 'form' ),
  addAttrs()( ( node, ctx ) => ( {
    sessionId: ctx.sessionId || '',
    productId: ctx.productId || '',
    lang: ctx.lang || '',
    project: ctx.project || ''
  } ) ),
);
