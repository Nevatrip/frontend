block( 'logo' )(
  content()( ( node, ctx ) => [
    {
      elem: 'image',
      elemMods: { view: 'lg' },
      logo: ctx.logo,
      logoTitle: ctx.logoTitle
    },
    {
      elem: 'image',
      elemMods: { view: 'sm' },
      logo: ctx.logoSm || ctx.logo,
      logoTitle: ctx.logoTitle
    }
  ] )
);
