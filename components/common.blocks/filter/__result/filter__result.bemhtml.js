block( 'filter' ).elem( 'result' )(
  content()( ( node, ctx ) => ( {
    elem: 'content',
    mix: { block: 'page', elem: 'content' },
    content: [
      ctx.allServices && {
        block: 'list',
        mods: { view: 'no-style' },
        content: ctx.allServices.map( item => ( {
          elem: 'item',
          content: {
            block: 'service',
            mods: { view: 'list-item-lg' },
            service: item,
            lang: ctx.lang,
            moreText: ctx.moreText,
            serviceAlias: ( ( item.title[ctx.lang] || {} ).key || {} ).current || '//',
            categoryAlias: ( ( ( ( item.category || {} ).title || {} )[ctx.lang] || {} ).key || {} ).current || '//',
            servicePriceOutside: ctx.servicePriceOutside
          }
        } ) )
      },
      ctx.allServices.length === 0 && {
        block: 'page',
        elem: 'row',
        content: {
          block: 'filter',
          elem: 'no-result',
          content: 'Нет подходящих экскурсий'
        }
      }

    // {
    //   block: 'page',
    //   elem: 'row',
    //   elemMods: { align: 'center' },
    //   content: [
    //     {
    //       block: 'button',
    //       mods: { size: 'sm', color: 'neutral' },
    //       text: 'Загрузить ещё'
    //     }
    //   ]
    // },
    // {
    //   block: 'filter',
    //   elem: 'neighbors'
    // }
    ]
  } ) )
);
