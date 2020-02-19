block( 'schema' ).mod( 'type', 'blog-posting' )(
  attrs()( () => ( {
    itemscope: true,
    itemprop: 'liveBlogUpdate',
    itemtype: 'http://schema.org/BlogPosting'
  } ) ),
);
