block( 'link' )(
  match( ( node, { to } ) => to ).def()( ( { data: { params: { project, lang, urlTo }, url: _url } }, ctx ) => {
    try {
      const params = {
        project,
        lang,
        ...ctx.params
      };
      const url = urlTo( ctx.to, params );

      ctx.url = url === _url.pathname ? '' : url;
    } catch( err ) {
      console.error( err );
    }
    return applyNext();
  } )
);
