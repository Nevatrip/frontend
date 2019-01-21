block('title').elem('img')(
  replace()((node, ctx) => {
    return [
      {
        block: 'image',
        mix: {block: node.block, elem: node.elem},
        url: ctx.url || '',
        title: ctx.title || '',
        alt: ctx.title || '',
      }
    ]
  })
);
