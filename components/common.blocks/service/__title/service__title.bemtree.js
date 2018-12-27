block('service').elem('title')(
  content()((node, ctx) => {
    return {
      content: ctx.content
    }
  })
);
