block('title').mod('view','xl')(
  content()((node, ctx) => {
    return [
      {
        elem: 'img',
        url: ctx.url,
        alt: ctx.title,
      },
      {
        block: 'page',
        elem: 'content',
        content: {
          block: 'heading',
          mods: { size: 'xxl' },
          mix: { block: 'title', elem : 'name' },
          content: ctx.title,
        }
      },
    ]
  })
);
