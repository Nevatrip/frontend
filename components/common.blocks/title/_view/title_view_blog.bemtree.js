block( 'title' ).mod( 'view', 'blog' )(
  content()( ( node, ctx ) => [
    {
      block: 'title',
      elem: 'blog-container',
      content: [
        {
          elem: 'img',
          url: ctx.imageUrl,
          title: ctx.title
        },
        {
          elem: 'logo',
          url: ctx.logoUrl,
          title: ctx.title
        }
      ]
    },

    {
      block: 'page',
      elem: 'content',
      content: [
        ctx.title && {
          block: 'heading',
          mods: { size: 'xxl' },
          mix: { block: 'blog', elem: 'heading' },
          content: ctx.title
        },
        ctx.intro && {
          block: 'title',
          elem: 'intro',
          content: {
            html: ctx.intro || ''
          }
        }
      ]
    }
  ] )
);
