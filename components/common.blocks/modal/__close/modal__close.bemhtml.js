block( 'modal' ).elem( 'close' ).replace()( ( { block, elem } ) => ( {
  block: 'button',
  mods: { view: 'plain' },
  mix: { block, elem, js: true },
  text: '×'
} ) );
