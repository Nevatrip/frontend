block( 'footer' ).elem( 'footer' )(
  tag()( 'footer' ),
  content()( ( node, ctx ) => ( {
    elem: 'content',
    content: [
      // {
      //   elem: 'basic-nav'
      // },
      {
        elem: 'footer-nav',
        navFooter: ctx.navFooter
      },
      {
        elem: 'copyright'
      }
    ]
  } ) )
);
