[{
  shouldDeps: [
    {
      block: 'service',
      mods: {view: 'list-item-sm'}
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
        {elem: 'content', mods: {view: 'narrow'}},
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
        'buy',
        'gallery'
      ]
    },
    {
      block: 'title',
      mods: { view: 'xl' }
    },
  ]
}]
