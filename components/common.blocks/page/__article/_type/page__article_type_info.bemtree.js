block('page').elem('article').elemMod('type', 'info')(
  content()((node, ctx) => {
    return [
      {
        block: 'heading',
        mods: {size: 'l'},
        content: {html:ctx.heading}
      },
      {
        content: {html: ctx.text}
      }
    ]
  })
);
