block('service').elem('price-outside')(
  content()((node, ctx) => {
    return {
      html: ctx.content + '&nbsp;₽ на&nbsp;причале'
    }
  })
);
