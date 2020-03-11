block( 'footer' )(
  extend()( ( node, ctx ) => ({
    _awards: ctx.awards,
    _mainNav: ctx.mainNav,
    _mainNavHeading: ctx.mainNavHeading,
    _basicNav: ctx.basicNav,
    _copyright: ctx.copyright,
    _counters: ctx.counters
  } ) ),
  content()( ( node, ctx ) => {
    const arrayOfCounters = [];

    for( const key in ctx.counters ) {
      arrayOfCounters.push( ctx.counters[key] );
    }

    return [
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
      },
      {
        elem: 'counters',
        counters: arrayOfCounters
      }
    ]
  } )
);
