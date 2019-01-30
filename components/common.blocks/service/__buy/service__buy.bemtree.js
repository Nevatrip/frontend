block('service').elem('buy')(
  content()((node, ctx) => {
    return [
      {
        block: 'page',
        elem: 'row',
        content: [
          ctx.price && {
            block: 'service',
            elem: 'price',
            elemMods: {view: 'md'},
            content: ctx.price,
          },
          {
            block: 'button',
            mods: {
              type: 'link',
            },
            text: 'Купить',
            url: ctx.urlBuy || '',
            title: 'Купить ' + (ctx.title || ''),
          },
        ]
      },
      ctx.priceOutside && {
        elem: 'price-outside',
        content: ctx.priceOutside,
      }
    ]
  }),
);
