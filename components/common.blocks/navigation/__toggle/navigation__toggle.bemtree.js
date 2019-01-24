block('navigation').elem('toggle')(
  content()((node, ctx) => {
    return {
      html: ctx.content
    }
  })
);
