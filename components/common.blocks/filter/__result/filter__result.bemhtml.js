block( 'filter' ).elem( 'result' )(
  content()( ( node, ctx ) => ( {
    elem: 'content',
    mix: { block: 'page', elem: 'content' },
    content: [
      {
        block: 'list',
        mods: { view: 'no-style' },
        content: ctx.allServices.map( item => ( {
          elem: 'item',
          content: {
            block: 'service',
            mods: { view: 'list-item-lg' },
            service: item
          }
        } ) )
      },
      {
        block: 'page',
        elem: 'row',
        elemMods: { align: 'center' },
        content: [
          {
            block: 'button',
            mods: { size: 'sm', color: 'neutral' },
            text: 'Загрузить ещё'
          }
        ]
      },
      {
        block: 'filter',
        elem: 'neighbors'
      }
    ]
  } ) )
);
