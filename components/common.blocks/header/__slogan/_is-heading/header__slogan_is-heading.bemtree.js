block('header').elem('slogan').elemMod( 'is-heading', true )(
  replace()((node, ctx) => {
    return {
      block: 'heading',
      mods: {size: 'xxl'},
      mix: {block: node.block, elem: node.elem, elemMods: node.elemMods},
      content: node._slogan
    }
  }),
);
