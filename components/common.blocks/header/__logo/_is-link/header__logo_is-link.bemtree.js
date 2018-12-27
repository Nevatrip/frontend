block('header').elem('logo').elemMod( 'is-link', true )(
  replace()((node, ctx) => {
    return {
      block: 'link',
      mods: {},
      url: '',
      mix: { block: node.block, elem : node.elem },
      content: {
        block: 'logo'
      }
    }
  }),
);
