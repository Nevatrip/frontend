block( 'schema' ).mod( 'type', 'organization' )(
  content()( ( node, ctx ) => [
    ctx.name && {
      block: 'schema',
      elem: 'itemprop',
      itemprop: 'name',
      content: ctx.name
    },
    ctx.description && {
      block: 'schema',
      elem: 'itemprop',
      itemprop: 'description',
      content: ctx.description
    },
    ctx.logo && {
      block: 'schema',
      elem: 'itemprop',
      elemMods: { type: 'img' },
      itemprop: 'logo',
      src: ctx.logo
    },
    ctx.email && {
      block: 'schema',
      elem: 'itemprop',
      itemprop: 'email',
      content: ctx.email
    },
    ctx.telephone && {
      block: 'schema',
      elem: 'itemprop',
      itemprop: 'telephone',
      content: ctx.telephone
    },
  ] ),
);
