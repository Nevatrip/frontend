block( 'page' ).mod( 'route', 'blog' )(
  mods()( node => [
    {
      block: 'blog',
      mods: { view: 'home-page' },
      settingBlog: node.data.api.settingBlog,
      settingSocials: node.data.api.settingSocials,
      theLatestBlog: node.data.api.theLatestBlog
    }
  ] ),
);

