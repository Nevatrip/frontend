block('cart')(
  content()((node, ctx) => {
    return [
      {
        block: 'text',
        content: 'Я - корзина!'
      }
    ]
  })
);
