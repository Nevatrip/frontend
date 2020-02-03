[
  {
    shouldDeps: [
      'features',
      'filter',
      'article',
      'title',
      {
        block: 'list',
        mods: {view: 'no-style'},
      },
      {
        block: 'title',
        mods: { view: 'sm' }
      },
      {
        block: 'page',
        elem: 'article'
      },
      {
        block: 'page',
        elem: 'content',
        mods: {view: 'narrow'}
      },
      {
        block: 'page',
        elem: 'hr',
        mods: {size: 'md'}//elemMods doesn't work
      },
      {
        block: 'service',
        mods: {view: 'banner'},
      },
      {
        block: 'schema',
        mod: { type: 'organization' },
      }
    ],
  },
];
