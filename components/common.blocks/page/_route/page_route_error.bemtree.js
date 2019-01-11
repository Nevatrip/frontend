block('page').mod('route', 'error')(
  mods()(( node ) => {
    return [
      {
        block: 'title',
        url: 'error.jpg',
        title: 'Ой, ошибка 404! Страница не нашлась:(',
      },
      {
        block: 'page',
        elem: 'content',
        content: ''
      }
    ];
  }),
);
