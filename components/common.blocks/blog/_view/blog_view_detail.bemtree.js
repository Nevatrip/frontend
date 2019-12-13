block( 'blog' ).mod( 'view', 'detail' )(
  content()( ( node, ctx ) => {
    const currentLang = node.data.params.lang;

    return [
      {
        elem: 'intro-img',
        img: ctx.blog.imgUrl || ''
      },
      {
        block: 'page',
        elem: 'content',
        elemMods: { view: 'narrow' },
        content: [
          {
            block: 'breadcrumbs',
            title: ctx.blog.title[currentLang].name,
            categoryName: ( ( ctx.settingBlog || {} ).heading || {} )[currentLang],
            category: 'service',
            categoryTo: 'blog'
          },
          {
            block: 'page',
            elem: 'row',
            elemMods: { sm: 'column' },
            content: [
              {
                block: 'page',
                elem: 'col',
                elemMods: { view: 'main' },
                content: [
                  ( ( ctx.blog || {} ).description || {} )[currentLang] && {
                    block: 'blog',
                    elem: 'h2',
                    content: ctx.blog.description[currentLang]
                  },
                  ( ( ( ctx.blog || {} ).title || {} )[currentLang] || {} ).name && {
                    block: 'blog',
                    elem: 'h1',
                    content: ctx.blog.title[currentLang].name
                  }
                ]
              }
            ]
          },
          {
            block: 'page',
            elem: 'row',
            elemMods: { sm: 'column' },
            content: [
              ( ctx.blog.content || {} )[currentLang] && {
                block: 'page',
                elem: 'col',
                elemMods: { view: 'main' },
                content: {
                  html: node._marked( ( ctx.blog.content || {} )[currentLang] ) || ''
                }
              },
              {
                block: 'page',
                elem: 'col',
                elemMods: { view: 'aside' },
                content: [
                  ( ( ctx.settingBlog || {} ).subscribeCaptionDetail || {} )[currentLang] && ( ( ctx.settingBlog || {} ).subscribeCode || {} )[currentLang] && {
                    block: 'blog',
                    elem: 'aside-item',
                    content: [
                      {
                        block: 'blog',
                        elem: 'h4',
                        content: ctx.settingBlog.subscribeCaptionDetail[currentLang]
                      },
                      {
                        block: 'blog',
                        elem: 'subscribe-code',
                        content: {
                          html: ctx.settingBlog.subscribeCode[currentLang]
                        }
                      }
                    ]
                  },
                  ( ( ctx.settingBlog || {} ).socialCaptionDetail || {} )[currentLang] && ( ( ctx.settingBlog || {} ).subscribeCode || {} )[currentLang] && ctx.settingSocials && {
                    block: 'blog',
                    elem: 'aside-item',
                    content: [
                      {
                        block: 'blog',
                        elem: 'h4',
                        content: ctx.settingBlog.socialCaptionDetail[currentLang]
                      },
                      {
                        block: 'contacts',
                        elem: 'social',
                        social: ctx.settingSocials
                      }
                    ]
                  },
                  ( ( ctx.settingBlog || {} ).hintCaptionDetail || {} )[currentLang] && ( ( ctx.settingBlog || {} ).subscribeCode || {} )[currentLang] && ctx.tenRandomBlogs && {
                    block: 'blog',
                    elem: 'aside-item',
                    content: [
                      {
                        block: 'blog',
                        elem: 'h4',
                        content: ctx.settingBlog.hintCaptionDetail[currentLang]
                      },
                      ctx.tenRandomBlogs.map( item => [
                        {
                          block: 'link',
                          mix: { block: 'blog', elem: 'text-preview' },
                          to: 'service',
                          params: {
                            category: 'blog',
                            service: item.alias
                          },
                          content: item.h1
                        },
                        {
                          block: 'br'
                        }
                      ] )
                    ]
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  } )
);
