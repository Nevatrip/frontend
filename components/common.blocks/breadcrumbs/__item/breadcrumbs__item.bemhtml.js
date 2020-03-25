block( 'breadcrumbs' ).elem( 'item' )(
  tag()( 'li' ),
  attrs()( () => (
    {
      itemscope: '',
      itemtype: 'http://schema.org/ListItem',
      itemprop: 'itemListElement'
    } )
  ),
)
