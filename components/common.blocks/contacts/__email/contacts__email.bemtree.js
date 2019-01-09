block('contacts').elem('email')(
  replace()( ( node, ctx ) => {
    return [
      {
        block: 'link',
        content: ctx.email,
        url: 'mailto:' + ctx.email,
        mix: { block: node.block, elem : node.elem },
      },
    ]
  } )
);
