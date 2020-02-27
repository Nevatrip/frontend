block( 'schema' ).mod( 'type', 'blog-posting' )(
  {
    addAttrs: {
      itemscope: true,
      itemprop: 'liveBlogUpdate',
      itemtype: 'http://schema.org/BlogPosting'
    },
  }
);
