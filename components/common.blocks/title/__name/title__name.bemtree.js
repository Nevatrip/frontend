block('title').elem('name')(
  content()((node, ctx) => {
    return [
      {
        content: ctx.title,
      }
    ]
  })
);

// block('footer').elem('main')(
//   tag()('section'),
//   content()( ( node, ctx ) => ({
//     elem: 'content',
//     elemMods: {'fdc': true},//flex-direction:column
//     content: [
//       {
//         elem: 'heading',
//       },
//       {
//         elem: 'main-nav',
//       },
//     ]
//   }))
// );

