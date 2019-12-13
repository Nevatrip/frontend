[{
  shouldDeps: [
    {
      block: 'breadcrumbs'
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
      elems: [
        'intro-img',
        'h1',
        'h2',
        'h4',
        'aside-item',
        'social',
        'subscribe-code',
        'text-preview'
      ]
    },
    {
      block: 'title',
      mods: { view: 'xl' }
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
      block: 'contacts',
      elem: 'social'
    },
    {
      block: 'br'
    }
  ]
}]
