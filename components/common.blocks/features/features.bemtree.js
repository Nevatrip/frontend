block( 'features' )(
  def()( ( node, ctx ) => {
    node._features = ctx.features;
    return applyNext()
  }
  ),
  content()( node => [
    {
      elem: 'content',
      tag: 'ul',
      mix: { block: 'page', elem: 'content' },
      content: node._features.map( item => ( {
        tag: 'li',
        elem: 'item',
        content: [
          {
            elem: 'item-img',
            content: {
              block: 'image',
              url: node._urlFor( ( item.img || {} )._ref ).url() || ''
            }
          },
          {
            elem: 'item-name',
            content: {
              html: item.name || ''
            }
          },
          {
            elem: 'item-description',
            content: {
              html: item.description || ''
            }
          }
        ]
      } ) )
    }
  ] )
);
