block( 'logo' ).mod( 'is-link', true )(
  replace()( ( node, ctx ) => ( {
    mix: { block: node.block },
    block: 'link',
    url: `/${ node.data.params.project }/${ node.data.params.lang }`,
    title: 'На главную',
    content: {
      block: 'logo',
      elem: 'image',
      logo: ctx.logo,
      logoTitle: ctx.logoTitle
    }
  } ) ),
);
