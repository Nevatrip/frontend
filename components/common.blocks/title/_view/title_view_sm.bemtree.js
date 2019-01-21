block('title').mod('view','sm')(
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
          mods: { size: 'xl' },
          mix: { block: 'title', elem : 'name' },
          content: ctx.title,
        }
      },
    ]
  })
);
