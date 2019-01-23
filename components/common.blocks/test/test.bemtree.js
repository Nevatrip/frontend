block('test')(
  content()((node, ctx) => {
    return [
      {
        elem: 'test',
        js: true,
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
            },
            content: 'Содержимое окна',
          }
        ]
      },
    ]
  })
);
