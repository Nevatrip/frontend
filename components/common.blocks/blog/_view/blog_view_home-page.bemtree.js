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
        intro: node._marked(( ( ctx.settingBlog || {} ).intro || {} )[currentLang] || '')
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

          // ( ( ctx.settingBlog || {} ).sectionsCaption || {} )[currentLang] && {
          //   block: 'heading',
          //   mods: { size: 'xl' },
          //   mix: { block: 'blog', elem: 'heading' },
          //   content: ctx.settingBlog.sectionsCaption[currentLang]
          // },
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
              },
              ( ( ctx.settingBlog || {} ).subscribeCaption || {} )[currentLang] && ( ( ctx.settingBlog || {} ).subscribeCode || {} )[currentLang] && {
                block: 'heading',
                mods: { size: 'xl' },
                mix: { block: 'blog', elem: 'heading' },
                content: ctx.settingBlog.subscribeCaption[currentLang]
              },
              ( ( ctx.settingBlog || {} ).subscribeCode || {} )[currentLang] && {
                block: 'blog',
                elem: 'subscribe-code',
                content: {
                  html: ctx.settingBlog.subscribeCode[currentLang]
                }
              },
              ctx.blogOffset.map( item => item.alias && {
                block: 'blog',
                mods: { view: 'sm' },
                content: item
              } )

              // ( ( ctx.settingBlog || {} ).blogsMore || {} )[currentLang] && {
              //   block: 'blog',
              //   elem: 'more',
              //   content: {
              //     html: ctx.settingBlog.blogsMore[currentLang]
              //   }
              // },
              // ( ( ctx.settingBlog || {} ).blogsHint || {} )[currentLang] && {
              //   block: 'heading',
              //   mods: { size: 'xl' },
              //   mix: { block: 'blog', elem: 'heading' },
              //   content: ctx.settingBlog.blogsHint[currentLang]
              // },
            ]
          }
        ]
      }
    ]
  } )
);
