[{
  shouldDeps: [
    {
      block: 'link',
    },
    {
      block: 'link',
      mods: {view: 'inherit'}
    },
    {
      block: 'heading',
      mods: {size: 'l'}
    },
    {
      block: 'list',
      mods: {view: 'colored-check'}
    },
    {
      block: 'image',
      mods: {view: 'bg'}
    },
    {
      block: 'button',
      mods: { type: 'link' },
    },
    {
      elems: [
        'blank',
        'features',
        'price',
        'more',
        'price-outside',
        {
          elem: 'title',
          mods: {view: 'banner'}
        }
      ]
    },
    {
      block: 'page',
      elem: 'row',
      mods: { view: 'service-banner' }
    }
  ]
}]
