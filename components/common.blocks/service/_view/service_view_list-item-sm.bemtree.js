block('service').mod('view', 'list-item-sm')(
  replace()((node, ctx) => {
    return [
      {
        block: 'link',
        mods: {display: 'block', view: 'inherit'},
        url: ctx.url,
        title: ctx.title,
        content: [
          {
            block: 'image',
            mix: {block: 'service', elem: 'image'},
            url: ctx.image,
            title: ctx.title,
            alt: ctx.title
          },
          {
            block: 'heading',
            mods: {size: 'm'},
            content: ctx.title
          }
        ]

      }
    ]
  }),
);
