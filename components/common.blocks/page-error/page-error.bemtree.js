block( 'page-error' ).replace()( node => {
  return [
    {
      elem: 'content',
      mix: { block: 'page', elem: 'content' },
    },
  ]
} );
