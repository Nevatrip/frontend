block( 'breadcrumbs' ).elem( 'link' )(
  replace()( ( node, ctx ) => ( {
    block: 'link',
    mix: { block: 'breadcrumbs', elem: 'link' },
    content: ctx.content,
    url: ctx.url
  } ) )
)
