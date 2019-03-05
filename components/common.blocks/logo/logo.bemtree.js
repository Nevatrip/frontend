block( 'logo' )(
  content()( ( node, ctx ) => [
    {
      elem: 'image',
      logo: ctx.logo,
      logoTitle: ctx.logoTitle
    }
  ] )
);
