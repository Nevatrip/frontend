block( 'breadcrumbs' )(
  content()( ( node, ctx ) => {
    const currentLang = node.data.params.lang;

    return [
      {
        elem: 'item',
        content: [
          {
            elem: 'link',
            url: `/${ node.data.params.project }/${ node.data.params.lang }`,
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
      node.data.params.category && node.data.params.service && {
        html: '&nbsp;/ '
      },
      node.data.params.category && node.data.params.service && {
        elem: 'item',
        content: [
          {
            elem: 'link',
            url: `/${ node.data.params.project }/${ node.data.params.lang }/${ node.data.params.category }`,
            content: {
              block: 'breadcrumbs',
              elem: 'name',
              content: ( ( ( ( ( node.data.api || {} ).service || {} ).category || {} ).title || {} )[currentLang] || {} ).name || ''
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
