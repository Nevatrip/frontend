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
          logoTitle: ctx.logoTitle
        },
        {
          elem: 'slogan',
          elemMods: { 'is-heading': ( ( node|| {} ).data||{} ).page === 'index' },
          slogan: ctx.slogan
        },
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
