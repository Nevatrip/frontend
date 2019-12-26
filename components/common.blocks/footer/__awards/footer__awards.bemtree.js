block( 'footer' ).elem( 'awards' )(
  content()( node => node._awards.map( item => ( item && {
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
