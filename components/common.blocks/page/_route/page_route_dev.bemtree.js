block('page').mod('route', 'dev')(
  mods()(( node ) => {
    return [
      {
        block: 'page',
        elem: 'hr'
      },
      {
        block: 'page',
        elem: 'content',
        content: [
          {
            block: 'list',
            mods: {type: 'disk'},
            items: [
              ['/', 'Главная'],
              ['/service', 'Услуга'],
              ['/error', 'Ошибка'],
              ['/default', 'Дефолтная страница'],
              ['/blog', 'Блог'],
              ['/blog-item', 'Детальная блога'],
            ].map( item => ( {
              block: 'link',
              url: item[0],
              content: item[1]
            } ) )
          }
        ]
      },
    ];
  }),
);
