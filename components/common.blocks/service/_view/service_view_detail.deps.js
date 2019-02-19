[{
  shouldDeps: [
    {
      block: 'service',
      mods: {view: 'list-item-sm'}
    },
    {
      block: 'page',
      elems: [
        {elem: 'row', mods: {sm: 'column'}},
        'hr',
        'iframe-container',
        {elem: 'hr', mods: {view: 'short'}},
        {elem: 'col', mods: {view: 'aside'}},
        {elem: 'col', mods: {view: 'main'}},
        {elem: 'content', mods: {view: 'narrow'}},
        'text',
      ]
    },
    {
      block: 'heading',
      mods: { size: ['xl', 'm'] }
    },
    {
      elems: [
        'gallery',
        'image',
        'title',
        'description',
        'price-info',
        'buy',
        'gallery',
        'advice'
      ]
    },
    {
      block: 'title',
      mods: { view: 'xl' }
    },
    {
      block: 'popup',
      mods: {
        theme: 'islands',
        target: 'anchor'
      },
    },
    {
      block: 'link',
      mods: {pseudo: true},
    },
    {
      block: 'list',
      mods: {
        view: 'no-style',
        sm: 'inline'
      },
    },
    {
      block: 'service',
      elem: 'remark'
    }
  ]
}]
