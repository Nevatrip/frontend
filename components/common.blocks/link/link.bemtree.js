block( 'link' )(
  match( ( node, { to } ) => to ).def()( ( { data }, ctx ) => {
    try {
      const params = {
        project: data.params.project,
        lang: data.params.lang,
        ...ctx.params
      }
      const url = data.params.urlTo( ctx.to, params );

      ctx.url = url === data.url.pathname ? '' : url
    } catch( err ) {
      console.error( err );
    }
    return applyNext();
  } )
);
