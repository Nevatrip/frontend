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
      block: 'link',
      mods: {view: 'button'},
    },
    {
      block: 'heading',
      mods: {size: 'l'}
    },
    {
      block: 'list',
      mods: { type: 'check-in-disk', size: 'xl' },
    },
    {
      block: 'image'
    },
    {
      block: 'image',
      mods: {view: 'bg'}
    },
    {
      elems: [
        'blank',
        'features',
        'more',
        'buy',
        {
          elem: 'title',
          mods: {view: 'md'}
        },
      ]
    },
    {
      block: 'page',
      elem: 'row',
      mods: {view: 'service-banner'}
    },
    {
      block: 'service',
      elem: 'banner',
      mods: { view: ['sm','lg'] }
    }
  ]
}]
