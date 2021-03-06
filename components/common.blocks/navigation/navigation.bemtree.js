block( 'navigation' )(
  addJs()( true ),
  content()( ( node, ctx ) => [
    {
      block: 'page',
      elem: 'content',
      content: [
        {
          block: 'navigation',
          elem: 'toggle',
          content: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 53 53" width="24" height="24"><g fill="#FFF"><path d="M2 13.5h49a2 2 0 0 0 0-4H2a2 2 0 0 0 0 4zM2 28.5h49a2 2 0 0 0 0-4H2a2 2 0 0 0 0 4zM2 43.5h49a2 2 0 0 0 0-4H2a2 2 0 0 0 0 4z"/></g></svg>',
          elemMods: { position: 'left' }
        },

        // {
        //   block: 'navigation',
        //   elem: 'toggle',
        //   content: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 53 53" width="24" height="24"><g fill="#FFF"><path d="M2 13.5h49a2 2 0 0 0 0-4H2a2 2 0 0 0 0 4zM2 28.5h49a2 2 0 0 0 0-4H2a2 2 0 0 0 0 4zM2 43.5h49a2 2 0 0 0 0-4H2a2 2 0 0 0 0 4z"/></g></svg>',
        //   elemMods: { position: 'right' }
        // },
        ctx.content && {
          block: 'navigation',
          elem: 'content',
          content: ctx.content.map( item => {
            if( item.alias ) {
              return {
                elem: 'item',
                content: [
                  {
                    block: 'link',
                    mix: { block: 'navigation', elem: 'link' },
                    to: 'servicesByCategory',
                    params: {
                      category: item.alias
                    },
                    content: [
                      item.title && {
                        block: 'navigation',
                        elem: 'title',
                        content: {
                          html: item.title
                        }
                      },
                      item.subTitle && {
                        block: 'navigation',
                        elem: 'subtitle',
                        content: {
                          html: item.subTitle
                        }
                      }
                    ]
                  }
                ]
              }
            }
          } )
        }
      ]
    }
  ] )
);
