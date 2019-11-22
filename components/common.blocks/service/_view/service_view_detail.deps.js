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
        {elem: 'hr', elemMods: {view: 'short'}},
        {elem: 'col', elemMods: {view: 'aside'}},
        {elem: 'col', elemMods: {view: 'main'}},
        {elem: 'content', elemMods: {view: 'narrow'}},
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
        sm: 'inline',
        type: 'check'
      },
    },
    {
      block: 'service',
      elem: 'remark'
    },
    {
      block: 'breadcrumbs'
    }
  ]
}]
