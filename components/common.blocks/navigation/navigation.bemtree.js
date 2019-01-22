block('navigation')(
  content()((node, ctx) => {
    return [
      {
        elem: 'content',
        mix: {block: 'page', elem: 'content'},
        content: ctx.content.map(item => ({
          elem: 'item',
          content: [
            {
              block: 'link',
              mix: {block: 'navigation', elem: 'link'},
              url: '/' + item.alias,
              content: [
                item.title &&{
                  block: 'navigation',
                  elem: 'title',
                  content: {
                    html: item.title,
                  }
                },
                item.subTitle && {
                  block: 'navigation',
                  elem: 'subtitle',
                  content: {
                    html: item.subTitle,
                  }
                }
              ]
            }
          ]
        }))
      }
    ]
  })
);
