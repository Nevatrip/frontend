block( 'page' )(
  match( node => node.data && node.data.view || node.data.page ).content()( node => [
    { elem: 'header' },
    { block: node.data.view || `page-${ node.data.page }` },
    { elem: 'footer' }
  ] ),
  addMix()( node => ( { block: node.data.view || `page-${ node.data.page }`, js: true } ) ),
);
