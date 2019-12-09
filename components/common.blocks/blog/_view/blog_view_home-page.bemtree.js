block( 'blog' ).mod( 'view', 'home-page' )(
  content()( ( node, ctx ) => {
    const currentLang = node.data.params.lang;

    return [
      ctx.settingBlog && {
        block: 'title',
        mods: { view: 'blog' },
        imageUrl: ( ctx.settingBlog || {} ).imageUrl,
        logoUrl: ( ctx.settingBlog || {} ).logoUrl,
        title: ( ( ctx.settingBlog || {} ).heading || {} )[currentLang],
        intro: ( ( ctx.settingBlog || {} ).intro || {} )[currentLang]
      },
      {
        block: 'page',
        elem: 'content',
        elemMods: { view: 'narrow' },
        content: [
          ctx.settingSocials && {
            block: 'blog',
            elem: 'social',
            settingSocials: ctx.settingSocials
          },
          ( ( ctx.settingBlog || {} ).sectionsCaption || {} )[currentLang] && {
            block: 'heading',
            mods: { size: 'xl' },
            mix: { block: 'blog', elem: 'heading' },
            content: ctx.settingBlog.sectionsCaption[currentLang]
          },
          ( ( ctx.settingBlog || {} ).blogsCaption || {} )[currentLang] && {
            block: 'heading',
            mods: { size: 'xl' },
            mix: { block: 'blog', elem: 'heading' },
            content: ctx.settingBlog.blogsCaption[currentLang]
          },
          {
            block: 'blog',
            elem: 'flex-col',
            content: [
              {
                block: 'blog',
                mods: { view: 'xl' },
                content: ctx.theLatestBlog
              }
            ]
          }
        ]
      }
    ]
  } )
);
