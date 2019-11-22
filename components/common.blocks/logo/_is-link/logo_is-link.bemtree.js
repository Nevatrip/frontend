block( 'logo' ).mod( 'is-link', true )(
  replace()( ( node, ctx ) => ( {
    mix: { block: node.block },
    block: 'link',
    to: 'index',
    title: 'На главную',
    content: {
      block: 'logo',
      elem: 'image',
      logo: ctx.logo,
      logoTitle: ctx.logoTitle
    }
  } ) ),
);
