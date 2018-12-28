block('title').elem('name')(
  content()((node, ctx) => {
    return [
      {
        content: ctx.title,
      }
    ]
  })
);

