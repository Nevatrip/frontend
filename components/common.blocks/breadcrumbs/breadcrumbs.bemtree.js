block( 'breadcrumbs' )(
  content()( ( node, ctx ) => {
    const currentLang = node.data.params.lang;

    return [
      {
        elem: 'item',
        content: [
          {
            block: 'link',
            mix: { block: 'breadcrumbs', elem: 'link' },
            attrs: {
              itemprop: 'item'
            },
            to: 'index',
            content: {
              block: 'breadcrumbs',
              elem: 'name',
              content: ( ( node.data.api.settingService || {} ).serviceMainPage || {} )[currentLang] || ''
            }
          },
          {
            elem: 'position',
            content: '1'
          }
        ]
      },
      ctx.category && {
        html: '&nbsp;/ '
      },
      ctx.category && ctx.categoryName && ctx.categoryTo && {
        elem: 'item',
        content: [
          {
            block: 'link',
            mix: { block: 'breadcrumbs', elem: 'link' },
            to: ctx.categoryTo,
            attrs: {
              itemprop: 'item'
            },
            params: {
              category: ctx.category
            },
            content: {
              block: 'breadcrumbs',
              elem: 'name',
              content: ctx.categoryName
            }
          },
          {
            elem: 'position',
            content: '2'
          }
        ]
      },
      {
        html: '&nbsp;/ '
      },
      {
        elem: 'item',
        elemMods: { property: 'no-attrs' },
        content: [
          {
            elem: 'name',
            elemMods: { property: 'no-attrs' },
            content: ctx.title
          }
        ]
      }
    ]
  }
  )
);
