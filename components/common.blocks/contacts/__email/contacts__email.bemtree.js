block('contacts').elem('email')(
  replace()( ( node, ctx ) => {
    return [
      ctx.email && {
        block: 'link',
        content: ctx.email[node.currentLang],
        url: 'mailto:' + ctx.email[node.currentLang],
        mix: { block: node.block, elem : node.elem },
      },
    ]
  } )
);
