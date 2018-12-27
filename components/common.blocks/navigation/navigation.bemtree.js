block('navigation')(
  def()((node, ctx) => {
      node._navigation = ctx.navigation;
      return applyNext()
    }
  ),
  content()((node, ctx) => {
    return [
      {
        elem: 'content',
        mix: {block: 'page', elem: 'content'},
        content: node._navigation.map(item => ({
          elem: 'item',
          attrs: {
            href: item.url
          },
          content: [
            {
              block: 'link',
              mix: {block: 'navigation', elem: 'link'},
              url: item.url,
              content: [
                {
                  block: 'navigation',
                  elem: 'title',
                  content: {
                    html: item.title
                  }
                },
                {
                  block: 'navigation',
                  elem: 'subtitle',
                  content: {
                    html: item.subtitle
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
