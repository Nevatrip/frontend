block( 'footer' ).elem( 'footer-nav' )(
  content()( ( node, ctx ) => [
    {
      elem: 'nav-list',
      content: ( ( ctx.navFooter || {} )[0] || {} ).map( item => {
        if( item.alias ) {
          if( ( item.anchor || '' ).replace( /\s/g, '' ).length === 0 ) {
            return {
              elem: 'nav-item',
              content: {
                mix: { block: 'footer', elem: 'nav-link' },
                block: 'link',
                content: ( item || {} ).title || '',
                to: 'article',
                params: {
                  article: item.alias
                }
              }
            }
          }
          return {
            elem: 'nav-item',
            content: {
              mix: { block: 'footer', elem: 'nav-link' },
              block: 'link',
              content: ( item || {} ).title || '',
              url: item.anchor
            }
          }
        }
      } )
    }] )
);
