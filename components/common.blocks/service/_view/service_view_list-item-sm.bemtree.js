block('service').mod('view', 'list-item-sm')(
  content()((node, ctx) => {
    return [
      {
        block: 'link',
        url: ctx.url,
        content: [
          {
            block: 'image',

          }
        ]

      }
    ]
  }),
);
