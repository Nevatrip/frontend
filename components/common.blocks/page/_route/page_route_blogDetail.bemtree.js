block( 'page' ).mod( 'route', 'blogDetail' )(
  mods()( node => {
    const serviceBasedData = node.data.api.serviceBasedData;
    const currentLang = node.data.params.lang;
    const blog = node.data.api.blog;

    return [
      {
        block: 'schema',
        mods: { type: 'blog-posting' },
        name: ( ( blog.title || {} )[currentLang] || {} ).name || '',
        description: ( blog.description || {} )[currentLang] || '',
        date: blog._createdAt || '',
        image: blog.imgUrl || '',
        author: ( serviceBasedData.title || {} )[currentLang] || ''
      },
      {
        block: 'blog',
        mods: { view: 'detail' },
        settingBlog: node.data.api.settingBlog,
        blog,
        blogOffset: node.data.api.blogOffset,
        settingSocials: node.data.api.settingSocials,
        tenRandomBlogs: node.data.api.tenRandomBlogs
      }
    ]
  } ),
);

