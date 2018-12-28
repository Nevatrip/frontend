block( 'title' )(
  content()((node, ctx)=>{
    return[
      {
        elem: 'img',
        url: ctx.url,
        alt: ctx.title,
        title: ctx.title,
      },
      {
        block: 'page',
        elem: 'content',
        content: {
          block:  'title',
          elem: 'name',
          title: ctx.title,
        }
      },
    ]
  })
);
