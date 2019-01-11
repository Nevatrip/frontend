block('service').elem('gallery')(
  replace()((node, ctx) => {
    return [
      {
        mix: { block: node.block, elem : node.elem },
        block: 'list',
        mods: {type: 'gallery'},
        items:
          (ctx.content.photos).map(item => {
            return {
              block: 'link',
              title: ctx.content.title,
              mods: {
                display: 'block'
              },
              content: {
                block: 'image',
                url: item,
                alt: ctx.content.title,
              }
            }
          })
      },
    ]
  })
);
