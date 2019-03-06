block( 'footer' ).elem( 'main' )(
  tag()( 'section' ),
  content()( () => ( {
    elem: 'content',
    elemMods: { fdc: true }, //flex-direction:column
    content: [
      {
        elem: 'heading'
      },
      {
        elem: 'main-nav'
      }
    ]
  } ) )
);
