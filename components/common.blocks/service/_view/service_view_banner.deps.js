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
        'more',
        'price-outside',
        {
          elem: 'title',
          mods: {view: 'md'}
        },
        {
          elem: 'price',
          mods: {view: 'md'}
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
