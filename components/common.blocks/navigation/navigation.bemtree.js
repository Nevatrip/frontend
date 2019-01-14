block('navigation')(
  content()((node, ctx) => {
    const navigation = (node.data.api.navigation[0] || {});
    return [
      {
        elem: 'content',
        mix: {block: 'page', elem: 'content'},
        content: navigation.map(item => ({
          elem: 'item',
          content: [
            {
              block: 'link',
              mix: {block: 'navigation', elem: 'link'},
              url: (item.alias || '/'),
              content: [
                {
                  block: 'navigation',
                  elem: 'title',
                  content: {
                    html: (item.title || ''),
                  }
                },
                {
                  block: 'navigation',
                  elem: 'subtitle',
                  content: {
                    html: (item.subTitle || ''),
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
