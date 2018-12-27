block( 'page' )
  .elem( 'navigation' )
  .replace()( node => ( {
    block: 'navigation',
    mix: { block: node.block, elem: node.elem }
  } ) );
