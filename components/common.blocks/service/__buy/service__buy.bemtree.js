block('service').elem('buy')(
  content()((node, ctx) => {
    const currentLang = node.data.params.lang;

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
            content: (node.data.api.settingService && node.data.api.settingService.serviceBuyLink && node.data.api.settingService.serviceBuyLink[currentLang]) ? node.data.api.settingService.serviceBuyLink[currentLang] : '',
            url: ctx.urlBuy || '',
            title: ((node.data.api.settingService && node.data.api.settingService.serviceBuyLink && node.data.api.settingService.serviceBuyLink[currentLang]) ? node.data.api.settingService.serviceBuyLink[currentLang] : '') + ' ' + (ctx.title || ''),
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
