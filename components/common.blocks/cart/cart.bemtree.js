block('cart')(
  addJs()( true ),
  content()((node, ctx) => {
    return [
      {
        block: 'text',
        content: 'Я - корзина!'
      }
    ]
  })
);
