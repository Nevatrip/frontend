block( 'footer' ).elem( 'footer-nav' )(
  content()( ( node, ctx ) => [
    {
      elem: 'nav-list',
      content: (( ctx.navFooter || {} )[0] || {} ).map( item => ( {
        elem: 'nav-item',
        content: {
          mix: { block: 'footer', elem: 'nav-link' },
          block: 'link',
          content: ( item || {} ).title || '',
          to: 'servicesByCategory',
          params: {
            category: item.alias
          }
        }
      } ) )
    }] )
);
