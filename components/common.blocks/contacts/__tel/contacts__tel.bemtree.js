block('contacts').elem('tel')(
  replace()((node, ctx) => {
    return [
      ctx.tel && {
        block: 'link',
        content: ctx.tel,
        url: 'tel:' + ctx.tel,
        mix: { block: node.block, elem : node.elem },
      },
    ]
  })
);
