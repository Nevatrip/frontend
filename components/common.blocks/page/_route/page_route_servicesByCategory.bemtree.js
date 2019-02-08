block('page').mod('route', 'servicesByCategory')(
  mods()((node) => {
    return [
      {
        block: 'title',
        mods: {view: 'xl'},
        // url: 'error.jpg',
        title: node.data.api.serviceCategoryFull[0].title,
      },
      {
        block: 'page',
        elem: 'content',
        content: {
          block: 'list',
          mods: {view: 'no-style'},
          content: node.data.api.services.map(item => {
            return {
              elem: 'item',
              content: {
                block: 'service',
                mods: {view: 'list-item-lg'},
                service: item
              },
            }
          })
        },
      },
    ];
  }),
);

