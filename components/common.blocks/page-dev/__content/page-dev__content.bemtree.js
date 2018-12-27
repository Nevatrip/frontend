block( 'page-dev' ).elem( 'content' )(
  content()( ( node, ctx ) => {
    return {
      html: '' +
        '<ul>' +
        '<li><a href="/">Главная</a><li>' +
        '</ul>'
    }
  })
);

