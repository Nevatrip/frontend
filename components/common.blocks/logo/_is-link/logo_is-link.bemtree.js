block( 'logo' ).mod( 'is-link', true )(
  replace()( ( node, ctx ) => ( {
    mix: { block: node.block },
    block: 'link',
    to: 'index',
    title: 'На главную',
    content: [
      {
        block: 'logo',
        elem: 'image',
        elemMods: { view: 'lg' },
        logo: ctx.logo,
        logoTitle: ctx.logoTitle
      },
      {
        block: 'logo',
        elem: 'image',
        elemMods: { view: 'sm' },
        logo: ctx.logoSm || ctx.logo,
        logoTitle: ctx.logoTitle
      }
    ]
  } ) ),
);
