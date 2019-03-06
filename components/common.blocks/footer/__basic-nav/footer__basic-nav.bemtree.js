block( 'footer' ).elem( 'basic-nav' )(
  content()( node => node._basicNav.map( item => ( {
    elem: 'basic-nav-item',
    content: [
      {
        mix: { block: 'footer', elem: 'basic-nav-link' },
        block: 'link',
        content: { html: item.name },
        url: item.url
      }
    ]
  } ) ) )
);
