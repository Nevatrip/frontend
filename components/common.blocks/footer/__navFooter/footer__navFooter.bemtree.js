block( 'footer' ).elem( 'navFooter' )(
  content()( ( node, ctx ) => {
    console.log(ctx.navFooter[0])
    return [
      {
        content: ctx.navFooter[0].map(item => item.title)
      }]
  } )
);
