[{
  shouldDeps: [
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
      block: 'service',
      mods: {view: 'list-item-sm'}
    },
    {
      block: 'page',
      elems: [
        {elem: 'row', mods: {sm: 'column'}},
        'hr',
        'iframe-container',
        {elem: 'hr', mods: {view: 'short'}},//elemMods doesn't work
        {elem: 'col', mods: {view: 'aside'}},//elemMods doesn't work
        {elem: 'col', mods: {view: 'main'}},//elemMods doesn't work
        {elem: 'content', mods: {view: 'narrow'}},//elemMods doesn't work
        'text',
      ]
    },
    {
      block: 'heading',
      mods: { size: ['xl', 'm'] }
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
