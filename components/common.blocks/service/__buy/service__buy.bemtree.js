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
            block: 'link',
            mods: {view: 'button'},
            content: 'Купить',
            url: ctx.urlBuy || '',
            title: 'Купить ' + (ctx.title || ''),
            to: ctx.route,
            params: ctx.params,
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
