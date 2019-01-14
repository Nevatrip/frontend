block('service').elem('buy')(
  content()((node, ctx) => {
    return [
      {
        block: 'page',
        elem: 'row',
        content: [
          ctx.content.price && {
            block: 'service',
            elem: 'price',
            elemMods: {view: 'md'},
            content: ctx.content.price,
          },
          {
            block: 'button',
            mods: {
              type: 'link',
            },
            text: 'Купить',
            url: ctx.content.urlBuy || '',
            title: 'Купить ' + (ctx.content.title || ''),
          },
        ]
      },
      ctx.content.priceOutside && {
        elem: 'price-outside',
        content: ctx.content.priceOutside,
      }
    ]
  }),
);
