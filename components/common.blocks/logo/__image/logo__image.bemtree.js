block('logo').elem('image')(
  replace()( ( node, ctx ) =>{
    return [
      {
        block: 'image',
        mix: { block: node.block, elem: node.elem },
        url: node._logo,
        alt: node._description,
      },
    ]
  })
);
