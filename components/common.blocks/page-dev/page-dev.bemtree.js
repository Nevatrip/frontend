block( 'page-dev' ).replace()( node => {
  return [
    {html: '' +
          '<ul class="page__content">' +
          '  <li><a href="/">Главная</a></li>' +
          '  <li><a href="/service">Услуга</a></li>' +
          '  <li><a href="/error">Ошибка</a></li>' +
          '  <li><a href="/default">Дефолтная страница</a></li>' +
          '  <li><a href="/blog">Блог</a></li>' +
          '  <li><a href="/blog-item">Детальная блога</a></li>' +
          '</ul>'
    },
  ]
} );
