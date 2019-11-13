block( 'filter' ).elem( 'header' )(
  content()( ( node, ctx ) => [
    {
      elem: 'header-top',
      content: [
        {
          block: 'image',
          mods: { view: 'bg' },
          url: node._bg,
          alt: 'Фильтр'
        },
        {
          elem: 'content',
          mix: { block: 'page', elem: 'content' },
          content: [
            // {
            //   elem: 'heading',
            //   content: node._dayHeading
            // },
            // {
            //   elem: 'day-tags'
            // },
            {
              elem: 'heading',
              content: node._basicHeading
            },
            {
              elem: 'basic-tags',
              basicTags: ctx.basicTags
            }
          ]
        }
      ]
    }

    // {
    //   elem: 'sorting'
    // }
  ] )
);
