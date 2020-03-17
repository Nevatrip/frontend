block( 'blog' ).mod( 'view', 'xl' )(
  content()( ( node, ctx ) => {
    const currentLang = node.data.params.lang;

    return ctx.content.alias && [
      {
        elem: 'img-wrap',
        content: {
          block: 'link',
          mix: [{ block: 'blog', elem: 'link' }, { block: 'blog', elem: 'img' }],
          attrs: { style: `;background-image: url(${ ctx.content.imgUrl });` },
          to: 'service',
          params: {
            category: 'blog',
            service: ctx.content.alias
          }
        }
      },
      {
        elem: 'content',
        content: [
          ctx.content.date && {
            elem: 'p',
            elemMods: { view: 'date' },
            content: ctx.content.date
          },
          ctx.content.h1 && {
            elem: 'h1',
            content: {
              block: 'link',
              mix: { block: 'blog', elem: 'link' },
              content: ctx.content.h1
            }
          },
          ctx.content.text && {
            elem: 'p',
            elemMods: { view: 'text' },
            content: ctx.content.text
          },
          {
            elem: 'p',
            elemMods: { view: 'more' },
            content: {
              block: 'link',
              mix: { block: 'blog', elem: 'more' },
              content: {
                html: `${ ( ( node.data.api.settingService || {} ).serviceViewListItemLgMore || {} )[currentLang] || '' }`
              },
              to: 'service',
              params: {
                category: 'blog',
                service: ctx.content.alias
              }
            }
          }
        ]
      }
    ]
  } )
);
