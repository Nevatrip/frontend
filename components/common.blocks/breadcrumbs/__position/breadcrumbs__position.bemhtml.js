block( 'breadcrumbs' ).elem( 'position' )(
  tag()( 'meta' ),
  attrs()( ( node, ctx ) => (
    {
      itemprop: 'position',
      content: ctx.content
    } )
  ),
)
