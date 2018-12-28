block('service').elem('price-outside')(
  content()((node, ctx) => {
    return {
      html: ctx.priceOutside + '&nbsp;₽ на&nbsp;причале'
    }
  })
);
