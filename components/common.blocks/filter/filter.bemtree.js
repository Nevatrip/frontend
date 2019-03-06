block( 'filter' )(
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
      elem: 'header'
    },
    {
      elem: 'result',
      allServices: ctx.allServices
    }
  ] )
);
