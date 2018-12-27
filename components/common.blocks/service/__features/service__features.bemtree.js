block('service').elem('features')(
  content()((node, ctx) => {
    return [
      {
        block: 'list',
        mods: {'colored': true},
        items: ctx.content,
      }
    ]
  })
);

