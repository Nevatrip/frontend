// block('navigation')(
//   tag()('nav'),
//   content()((node, ctx) => {
//     return [
//       {
//         elem: 'content',
//         tag: 'ul',
//         content: node._navigation.map(item => ({
//           elem: 'item',
//           tag: 'li',
//           content: [
//             {
//               block: 'link',
//               content: [
//                 {
//                   elem: 'title',
//                   tag: 'span',
//                 },
//                 {
//                   elem: 'subtitle',
//                   tag: 'span',
//                 }
//               ]
//             }
//           ]
//         }))
//       }
//     ]
//   })
// );
//
