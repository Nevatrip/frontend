block('logo').elem('image')(
  replace()( ( node, ctx ) =>{
    return [
      {
        block: 'image',
        mix: { block: node.block, elem: node.elem },
        url: ctx.logo,
        alt: ctx.logoTitle,
        title: ctx.logoTitle,
      },
    ]
  })
);
