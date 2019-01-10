block('footer').elem('header')(
  content()((node, ctx) => ({
    elem: 'content',
    content: [
      {
        elem: 'awards'
      },
      {
        block: 'contacts',
        mods: { view: 'footer' }
      }
    ]
  }))
);
