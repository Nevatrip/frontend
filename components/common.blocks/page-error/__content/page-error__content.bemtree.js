block( 'page-error' ).elem( 'content' )(
  content()( ( node, ctx ) => {
    return {
      html: 'Ай! Ошибка!'
    }
  })
);
