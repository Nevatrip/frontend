block( 'schema' ).mod( 'type', 'offer' )(
  attrs()( () => ( {
    itemscope: true,
    itemtype: 'http://schema.org/Offer',
    itemprop: 'offers'
  } ) ),
);
