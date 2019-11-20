block( 'filter' )(
  addJs()( true ),
  def()( ( node, ctx ) => {
    // TODO: remove from global node
    node._bg = ctx.bg;
    node._dayHeading = ctx.dayHeading;
    node._dayTags = ctx.dayTags;
    node._basicHeading = ctx.basicHeading;
    node._sorting = ctx.sorting;
    return applyNext()
  }
  ),
  content()( ( node, ctx ) => [
    {
      elem: 'header',
      basicTags: ctx.basicTags
    },
    {
      elem: 'result',
      moreText: ctx.moreText,
      lang: ctx.lang,
      allServices: ctx.allServices,
      mainUrl: ctx.mainUrl,
      servicePriceOutside: ctx.servicePriceOutside
    }
  ] )
);
