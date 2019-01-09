[{
  shouldDeps: [
    {
      block: 'button',
      mods: { type: 'link' },
    },
    {
      elems: [
        'image',
        'price-outside',
        'aside-content',
        {
          elem: 'title',
          mods: {view: 'sm'}
        },
        {
          elem: 'price',
          mods: {view: 'sm'}
        }
      ]
    },
    {
      block: 'page',
      elems: [
        {
          elem: 'row',
          mods: {view: 'service-list-item-lg'}
        },
        'col',
        'row'
      ]
    },
    {
      block: 'list',
      mods: { view: 'check' }
    },
    {
      block: 'heading',
      mods: { size: 'l' }
    },
  ]
}]
