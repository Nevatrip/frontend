block( 'footer' ).elem( 'main-nav' )(
  content()( node => node._mainNav.map( item => ( {
    elem: 'main-nav-item',
    content: [
      {
        mix: { block: 'footer', elem: 'main-nav-link' },
        block: 'link',
        content: ( item || {} ).name || '',
        to: ( item || {} ).route || '',
        params: {
          collection: ( item || {} ).collection || ''
        }
      }
    ]
  } ) ) )
);
