block('service').elem('price-outside')(
  content()((node, ctx) => {
    const currentLang = node.data.params.lang;
    const servicePriceOutside = (node.data.api.settingService && node.data.api.settingService.servicePriceOutside && node.data.api.settingService.servicePriceOutside[currentLang]) ? node.data.api.settingService.servicePriceOutside[currentLang] : '';

    return ctx.content && {
      html:  ctx.content.match(/\d{2,6}/) ? ctx.content + '&nbsp;₽ ' + servicePriceOutside : servicePriceOutside + '&nbsp;' + ctx.content,
    }
  })
);
