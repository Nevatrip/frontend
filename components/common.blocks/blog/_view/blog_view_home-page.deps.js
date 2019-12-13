[{
  shouldDeps: [
    {
      block: 'title',
      mods: { view: 'blog' }
    },
    {
      block: 'page',
      elem: 'content',
      elemMods: { view: 'narrow' },
    },
    {
      block: 'blog',
      elems: [ 'social', 'heading', 'flex-col', 'subscribe-code' ]
    },
    {
      block: 'heading',
      mods: { size: 'xl' }
    },
    {
      block: 'blog',
      mods: { view: [ 'xl', 'sm'] }
    }
  ]
}]
