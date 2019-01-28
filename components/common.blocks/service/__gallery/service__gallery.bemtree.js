block('service').elem('gallery')(
  replace()((node, ctx) => {
    return [
      {
        mix: { block: node.block, elem : node.elem },
        block: 'list',
        mods: {type: 'gallery'},
        items:
          (ctx.photos).map(item => {
            return {
              block: 'link',
              title: item.description,
              url: urlFor(item.asset._ref).url(),
              mods: {
                display: 'block'
              },
              content: {
                block: 'image',
                url: urlFor(item.asset._ref).fit('crop').width(133).height(133).url(),
                alt: item.description,
              }
            }
          })
      },
    ]
  })
);
