block( 'popup-tip' )(
  addJs()( true ),
  content()( ( node, ctx ) => [
    {
      elem: 'elem',
      content: [
        {
          block: 'link',
          mods: { pseudo: true },
          content: ctx.title
        },
        {
          block: 'popup',
          mods: {
            target: 'anchor',
            autoclosable: true
          },
          directions: ['top-center'],
          content: ctx.text
        }
      ]
    }
  ] )
);
