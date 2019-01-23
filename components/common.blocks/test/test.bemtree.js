block('test')(
  addJs()(true),
  content()((node, ctx) => {
    return [
      {
        elem: 'elem',
        content: [
          {
            block: 'link',
            mods: {pseudo: true},
            content: 'ПОКАЗАТЬ ОКНО',
          },
          {
            block: 'popup',
            mods: {
              theme: 'islands',
              target: 'anchor',
              autoclosable: true
            },
            directions : ['left-center'],
            content: 'Содержимое окна',
          }
        ]
      },
    ]
  })
);
