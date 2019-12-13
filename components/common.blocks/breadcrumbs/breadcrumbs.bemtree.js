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
        content: [
          {
            elem: 'name',
            content: ctx.title
          }
        ]
      }
    ]
  }
  )
);
