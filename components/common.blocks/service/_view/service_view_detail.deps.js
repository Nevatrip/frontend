[{
  shouldDeps: [
    {
      block: 'service',
      mods: {view: 'list-item-sm'}
    },
    {
      block: 'button',
      mods: {type: 'link'}
    },
    {
      block: 'page',
      elems: [
        'row',
        'hr',
        'iframe-container',
        {elem: 'hr', mods: {view: 'short'}},
        {elem: 'col', mods: {view: 'aside'}},
        {elem: 'col', mods: {view: 'main'}},
      ]
    },
    {
      block: 'heading',
      mods: { size: 'xl' }
    },
    {
      elems: [
        'image',
        'title',
        'description',
        'price-info',
        'price',
        'price-outside',
        'gallery'
      ]
    },
    {
      block: 'title',
      elems: [
        'img',
        'title'
      ]
    },
  ]
}]
