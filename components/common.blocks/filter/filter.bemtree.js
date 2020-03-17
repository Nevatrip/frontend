block( 'filter' )(
  addJs()( true ),
  def()( ( node, ctx ) => {
    node._bg = ctx.bg;
    node._sorting = ctx.sorting;
    return applyNext()
  }
  ),
  content()( ( node, ctx ) => [
    // {
    //   elem: 'header',
    //   basicTags: ctx.basicTags,
    //   basicHeading: ctx.basicHeading,
    //   dayHeading: ctx.dayHeading
    // },
    {
      elem: 'result',
      moreText: ctx.moreText,
      lang: ctx.lang,
      allServices: ctx.allServices,
      mainUrl: ctx.mainUrl,
      servicePriceOutside: ctx.servicePriceOutside,
      currency: ctx.currency
    }
  ] )
);
