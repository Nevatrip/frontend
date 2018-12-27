block('service').elem('image')(
  replace()(node => {
    return [
      {
        block: 'image',
        mix: {block: node.block, elem: node.elem},
        url: node._img,
        alt: node._name,
      },
    ]
  })
);
