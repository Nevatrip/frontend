block('page').mod('route', 'service')(
  mods()(( node ) => {
    return [
      {
        block: 'service',
        mods: {view: 'detail'},
        content: node.data.api.service[0]
      },
    ];
  }),
);
