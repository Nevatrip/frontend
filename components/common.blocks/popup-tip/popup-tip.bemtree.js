block('popup-tip')(
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
              target: 'anchor',
              autoclosable: true
            },
            directions : ['top-center'],
            content: 'Содержимое окна',
          }
        ]
      },
    ]
  })
);
