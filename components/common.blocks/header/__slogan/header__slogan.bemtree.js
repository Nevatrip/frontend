block('header').elem('slogan')(
  replace()((node, ctx) => {
    return [
      {
        block: 'heading',
        mix: {block: node.block, elem: node.elem},
        content: ctx.slogan
      }
    ]
  })
);
