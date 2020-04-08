[{
  shouldDeps: [
    {
      block: 'breadcrumbs',
      elems: [
        'item',
        {elem: 'item', mods: {property: 'no-attrs'}},//elemMods doesn't work
        'link',
        'name',
        {elem: 'name', mods: {property: 'no-attrs'}},//elemMods doesn't work
        'position'
      ],
    },
    {
      block: 'link'
    }
  ],
}];
