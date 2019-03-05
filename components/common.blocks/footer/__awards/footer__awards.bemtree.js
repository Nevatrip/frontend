block( 'footer' ).elem( 'awards' )(
  content()( ( node, ctx ) => node._awards.map( item => ( {
    elem: 'awards-item',
    content: [
      {
        block: 'footer',
        elem: 'awards-img',
        content: {
          block: 'image',
          url: '/footer__awards-item.png',
          mods: { view: 'bg-transparent' },
          alt: 'Премия'
        }
      },
      item
    ]
  } ) ) )
);
