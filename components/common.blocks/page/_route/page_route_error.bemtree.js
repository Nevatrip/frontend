block('page').mod('route', 'error')(
  mods()((node) => {
    return [
      {
        block: 'title',
        mods: {view: 'xl'},
        url: 'error.jpg',
        title: 'Ой, ошибка 404! Страница не нашлась:(',
      },
      {
        block: 'page',
        elem: 'content',
        elemMods: {view: 'narrow'},
        content: [
          {
            block: 'page',
            elem: 'row',
            content: [
              {
                block: 'page',
                elem: 'col',
                elemMods: {view: 'main'},
                content: [
                  {
                    html: '<p>Мы до сих пор не понимаем, как у вас это получилось, но, если честно, тут нет ничего интересного. Не расстраивайтесь, лучше посмотрите, какие классные экскурсии мы для вас подобрали:</p>'
                  },
                  {
                    block: 'page',
                    elem: 'row',
                    content: {
                      block: 'service',
                      mods: {view: 'list-item-sm'},
                      // content: ctx.service
                    }
                  }
                ]
              },
              {
                block: 'page',
                elem: 'col',
                elemMods: {view: 'aside'},
                content: [
                  {
                    block: 'article',
                    mods: {type: 'info'},

                    content: {
                      heading: 'Что такое &laquo;Ошибка 404&raquo;?',
                      text: '<p>Это означает, что ссылка, по&nbsp;которой вы&nbsp;перешли, адресует на&nbsp;несуществующую страницу. Или вы&nbsp;опечатались, когда самостоятельно набирали путь в&nbsp;адресной строке браузера.</p>',
                    },
                  }
                ]
              }
            ]
          }
        ]
      }
    ];
  }),
);
