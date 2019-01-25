[{
  shouldDeps: [
    {
      block: 'button',
      mods: {type: 'link'},
    },
    {
      elems: [
        {
          elem: 'image',
          mods: {size: 'third'},
        },
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
          mods: {
            view: 'service-list-item-lg',
            xs: 'column',
          }
        },
        'col',
        'row',
        {
          elem: 'hr',
          mods: {view: 'md'}
        }
      ]
    },
    {
      block: 'list',
      mods: {type: 'check', size: 'sm'}
    },
    {
      block: 'heading',
      mods: {size: 'l'}
    },
    {
      block: 'image',
      mods: {view: 'bg'}
    },
  ]
}]
