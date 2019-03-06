block( 'footer' ).elem( 'footer' )(
  tag()( 'footer' ),
  content()( () => ( {
    elem: 'content',
    content: [
      {
        elem: 'basic-nav'
      },
      {
        elem: 'copyright'
      }
    ]
  } ) )
);
