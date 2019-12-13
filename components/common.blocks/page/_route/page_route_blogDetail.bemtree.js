block( 'page' ).mod( 'route', 'blogDetail' )(
  mods()( node => [
    {
      block: 'blog',
      mods: { view: 'detail' },
      settingBlog: node.data.api.settingBlog,
      blog: node.data.api.blog,
      blogOffset: node.data.api.blogOffset,
      settingSocials: node.data.api.settingSocials,
      tenRandomBlogs: node.data.api.tenRandomBlogs
    }
  ] ),
);

