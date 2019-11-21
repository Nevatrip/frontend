block( 'footer' )(
  def()( ( node, ctx ) => {
    node._awards = ctx.awards;
    node._mainNav = ctx.mainNav;
    node._mainNavHeading = ctx.mainNavHeading;
    node._basicNav = ctx.basicNav;
    node._copyright = ctx.copyright;
    return applyNext()
  }
  ),
  content()( ( node, ctx ) => [
    {
      elem: 'header',
      social: ctx.social
    },
    {
      block: 'page',
      elem: 'content',
      content: {
        block: 'page',
        elem: 'hr',
        elemMods: { color: 'dark' }
      }
    },
    {
      elem: 'main'
    },
    {
      elem: 'footer',
      social: ctx.social
    }
  ] )
);
