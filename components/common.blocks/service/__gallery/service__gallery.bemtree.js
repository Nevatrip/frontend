block('service').elem('gallery')(
  replace()((node, ctx) => {
    return [
      {
        mix: { block: node.block, elem : node.elem },
        block: 'list',
        mods: {type: 'gallery'},
        items:
          (ctx.content).map(item => {
            return {
              block: 'link',
              mods: {
                display: 'block'
              },
              content: {
                block: 'image',
                url: item
              }
            }
          })
      },
    ]
  })
);
