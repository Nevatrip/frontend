[{
  shouldDeps: [
    {
      block: 'title',
      mods: {view: 'xl'},
    },
    {
      block: 'page',
      elems: [
        'content',
        'row',
        {
          elem: 'col',
          mods: {view: ['main', 'aside']}
        },
        {
          elem: 'article',
          mods: {type: 'info'},
        }
      ],
    },
    {
      block: 'service',
      mods: {view: 'list-item-sm'}
    },
    {
      block: 'list',
      mods: {
        view: 'no-style',
        sm: 'inline'
      },
    },
    'link',
    {
      block: 'schema',
      mods: { type: 'organization' },
    }
  ]
}]
