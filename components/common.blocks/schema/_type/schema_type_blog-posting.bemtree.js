block( 'schema' ).mod( 'type', 'blog-posting' )(
  content()( ( node, ctx ) => [
    ctx.name && {
      block: 'schema',
      elem: 'itemprop',
      itemprop: 'headline',
      content: ctx.name
    },
    ctx.date && {
      block: 'schema',
      elem: 'itemprop',
      itemprop: 'datePublished',
      content: ctx.date
    },
    ctx.description && {
      block: 'schema',
      elem: 'itemprop',
      itemprop: 'description',
      content: ctx.description
    },
    ctx.image && {
      block: 'schema',
      elem: 'itemprop',
      elemMods: { type: 'img' },
      itemprop: 'image',
      src: ctx.image
    },
    ctx.author && {
      block: 'schema',
      elem: 'itemprop',
      itemprop: 'author',
      content: ctx.author
    }
  ] ),
);
