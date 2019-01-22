block('service').elem('price-outside')(
  content()((node, ctx) => {
    return ctx.content && {
      // html: ctx.content + '&nbsp;₽ на&nbsp;причале'
      html:  ctx.content.match(/\d{2,6}/) ? ctx.content + '&nbsp;₽ на&nbsp;причале' : 'На&nbsp;причале&nbsp;' + ctx.content,
    }
  })
);
