block( 'footer' ).elem( 'address' )(
  replace()( ( node, ctx ) => ( {
    block: 'address',
    mix: { block: node.block, elem: node.elem },
    content: [
      {
        elem: 'social'
      }
    ]
  } ) ),
);
