block('page').mod('route', 'service')(
  mods()(( node ) => {
    return [
      {
        block: 'service',
        mods: {view: 'detail'},
        service: node.data.api.service
      },
    ];
  }),
);
