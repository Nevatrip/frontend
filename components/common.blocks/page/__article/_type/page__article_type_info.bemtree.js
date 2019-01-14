block('page').elem('article').mods('type', 'info')(
  content()((node, ctx) => {
    return [
      {
        block: 'heading',
        mods: {size: 'l'},
        content: ctx.heading
      },
      {
        content: {html: ctx.text}
      }
    ]
  })
);
