block('logo').mod( 'is-link', true )(
  replace()((node, ctx) => {
    return {
      mix: { block: node.block},
      block: 'link',
      url: '/',
      title: 'На главную',
      content: {
        block: 'logo',
        elem: 'image'
      }
    }
  }),
);
