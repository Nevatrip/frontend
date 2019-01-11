block('service').elem('features')(
  content()((node, ctx) => {
    return [
      {
        block: 'list',
        mods: {type: 'disk', size: 'md'},
        items: ctx.content,
      }
    ]
  })
);

