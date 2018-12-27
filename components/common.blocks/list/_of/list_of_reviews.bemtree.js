block( 'list' ).mod( 'of', 'reviews' ).content()( ( node, { itemMix, reviews } ) => reviews.map( review => ( {
  elem: 'item',
  mix: itemMix,
  content: {
    block: 'review',
    mods: { view: 'short' },
    review
  }
} ) ) );
