block('service').elem('buy')(
  content()((node, ctx) => {
    return [
      {
        block: 'page',
        elem: 'row',
        content: [
          {
            block: 'service',
            elem: 'price',
            elemMods: {view: 'md'},
            content: node._service.price,
          },
          {
            block: 'button',
            mods: {
              type: 'link',
            },
            text: 'Купить',
            url: node._service.urlBuy,
            title: 'Купить ' + node._service.title,
          },
        ]
      },
      {
        elem: 'price-outside',
        content: node._service.priceOutside,
      }
    ]
  }),
);
