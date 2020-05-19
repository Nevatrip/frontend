block( 'header' )(
  content()( ( node, ctx ) => [
    {
      elem: 'content',
      mix: { block: 'page', elem: 'content' },
      content: [
        {
          block: 'logo',
          mods: { 'is-link': ( ( node || {} ).data || {} ).page !== 'index' },
          logo: ctx.logo,
          logoSm: ctx.logoSm,
          logoTitle: ctx.logoTitle
        },
        {
          elem: 'slogan',
          elemMods: { 'is-heading': ( ( node|| {} ).data||{} ).page === 'index' },
          slogan: ctx.slogan
        },

        // { elem: 'hashtag' },
        {
          elem: 'langs'
        },
        {
          elem: 'contacts'
        }
      ]
    }
  ] )
);
