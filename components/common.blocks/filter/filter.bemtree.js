block('filter')(
  def()((node, ctx) => {
      basicTags = ctx.basicTags;

      node._bg = ctx.bg;
      node._dayHeading = ctx.dayHeading;
      node._dayTags = ctx.dayTags;
      node._basicHeading = ctx.basicHeading;
      node._sorting = ctx.sorting;
      node._result = ctx.result;
      return applyNext()
    }
  ),
  content()((node, ctx) => {
    return [
      {
        elem: 'header',
      },
      {
        elem: 'result',
      }
    ]
  })
);
