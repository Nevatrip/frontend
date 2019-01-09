block( 'root' ).replace()( ( node, ctx ) => {

  const level = ctx.level || 'desktop';

  const config = node.config = ctx.config;

  const data = node.data = ctx.data;

  const contacts = node._contacts = {
    tel: '8 812 244 98 24',
    email: 'info@nevatrip.ru',
    social: [
      {
        name: 'Vk',
        url: 'https://vk.com/neva.trip'
      },
      {
        name: 'Instagram',
        url: 'https://www.instagram.com/nevatrip.ru/'
      }
    ],
  };

  const service = node._service = {
    img: 'https://nevatrip.ru/assets/img/e/night/nochnaya-ekskursiya-pod-razvod-mostov_bg.jpg',
    url: 'https://nevatrip.ru/night/nochnaya-ekskursiya-pod-razvod-mostov',
    urlBuy:  '#buy',
    title: 'День ВМФ 2019 - экскурсия на теплоходе',//'АКЦИЯ - Обзорная экскурсия по рекам и каналам с остановками Hop on Hop Off 2019',
    longTitle: 'Обзорная экскурсия по рекам и каналам с остановками в формате Hop on Hop Off - Купить билет онлайн',
    description: '&#9875; Обзорная экскурсия по рекам и каналам Петербурга &#9875; 6 остановок у главных достопримечательностей. Неограниченное число поездок в течение дня ',
    introText: '',
    alias: 'hop-on-hop-off',
    content: '<div><p><strong>-------------------------------------------------</strong></p>\n' +
      '<p><strong>Приобретайте билеты на следующий сезон по ценам 2018 года.<br />Бронировать заранее - это выгодно!</strong></p>\n' +
      '<p><strong>-------------------------------------------------</strong></p>\n' +
      '<p>&nbsp;</p>\n' +
      '<p><strong>Экскурсия по рекам и каналам Петербурга с остановками Hop on Hop Off 2019.</strong><br />Посмотреть город с воды и с земли, совместить водный и пеший маршрут - именно это позволяет данная обзорная экскурсия по Петербургу!&nbsp;Самое главное &ndash; вы абсолютно не ограничены во времени&nbsp;отправления и можете самостоятельно его распределить так, как считаете нужным. Это идеальный способ посмотреть все главные достопримечательности за 1 день, и при этом совсем не устать!<br /><br /></p>\n' +
      '<p><strong>Особенности:</strong></p>\n' +
      '<ul>\n' +
      '<li>6 остановок у главных достопримечательностей</li>\n' +
      '<li>Неограниченное число катаний</li>\n' +
      '<li>Билет на целый день</li>\n' +
      '<li>Теплоход с панорамным остеклением и баром</li>\n' +
      '<li>Аудиогид на русском, английском и испанском</li>\n' +
      '<li>Лучший&nbsp;способ изучить город</li>\n' +
      '</ul>\n' +
      '<p><strong>Покупка билетов:</strong></p>\n' +
      '<ul>\n' +
      '<li>Очень удобная - для этого достаточно просто кликнуть по кнопке "Купить".</li>\n' +
      '<li>После покупки электонный билет придёт на вашу электронную почту, вы можете НЕ распечатать его достаточно предьявить его электронную версию в кассе на причале.</li>\n' +
      '<li>Вы можете купить билет за пол часа до рейса, при наличии билетов.</li>\n' +
      '<li>Начало маршрута от причала на Адмиралтейской набережной и от причала Фаберже, первая посадка осуществляется только там. Потом вы можете входить и выходить на любом причале.</li>\n' +
      '</ul>\n' +
      '<p><br /><strong>Маршрут:</strong></p>\n' +
      '<p>Обзорная экскурсия по рекам и каналам Петербурга в режиме Hop on Hop off позволит познакомиться поближе с главными достопримечательностями города.</p>\n' +
      '<p>Маршрут включает <strong>6 остановок</strong> у главных музеев и достопримечательностей Петербурга (первая - Эрмитаж, затем Петропавловская крепость, Летний сад, крейсер "Аврора", Музей Фаберже, музей Кунсткамера). На любой из остановок во время city tour в Санкт-Петербурге вы можете сойти на берег и, осмотрев достопримечательность, вернуться. И так - неограниченное число раз, пока длятся речные прогулки!&nbsp;<br /><br />Маршрут этой речной прогулки проходит по центральным рекам и каналам, поэтому Вам будет удобно посетить основные дворцы, соборы и музеи Петербурга. Билет действует целый&nbsp;день, и это самый удобный вариант знакомства с историческим Петербургом.&nbsp;<br /><br /></p>\n' +
      '<p><strong>Теплоход:</strong></p>\n' +
      '<p>Экскурсии по Питеру проводится на прогулочном теплоходе с откидным верхом и купольным остеклением, поэтому Вы получите максимум удовольствия, вне зависимости от погодных условий. Если же погода испортилась, то на теплоходе Вы можете взять бесплатные зонты.&nbsp;<br />Экскурсия на теплоходе осуществляется в формате аудио-гида&nbsp;на 2 языках:&nbsp;русском и английском.<br /><br />Экскурсия по рекам и каналам с остановками в режиме Hop on Hop Off &ndash; это новый формат культурного отдыха, и его уже успели оценить сотни и тысячи туристов, посетивших город. Увлекательная обзорная экскурсия по рекам и каналам Петербурга позволит узнать много нового и интересного о северной столице.</p>\n' +
      '<p>Для такой&nbsp;экскурсии по каналам Санкт-Петербурга цена на сайте составляет всего&nbsp;890 рублей вместо 1200 на причале.&nbsp;Доступная цена билетов на речные прогулки по рекам и каналам обеспечивается покупкой онлайн.<br /><br />Эта экскурсия подарит Вам море новых впечатлений и замечательные фото. Не откладывайте покупку -&nbsp;</p>\n' +
      '<p><span>Забронируйте себе место на теплоходе прямо сейчас! По лучшей цене, с гарантированным местом!</span></p>\n' +
      '<p><br />Остались вопросы по данному туру? Смело обращайтесь в нашу дружественную службу поддержки <a href="tel:88122449824">8 (812) 244-98-24</a>. Мы всегда рады помочь.&nbsp;</p>\n' +
      '<p><br /><br /><a href="http://nevatrip.ru/">Все водные прогулки и экскурсии по рекам и каналам СПб.</a></p>\n' +
      '<p>&nbsp;</p></div>',
    features: ['Лучшие виды на салют', 'Музыка военных лет', 'Однопалубный теплоход с открытой и закрытой палубой', '1,5 часа прогулки'],//['6 остановок у главных достопримечательностей', 'Неограниченное число катаний', 'Билет на целый день', 'Идеальный способ изучить город'],
    photos: ['https://nevatrip.ru/assets/components/gallery/connector.php?action=web/phpthumb&ctx=web&w=940&h=940&zc=0&far=&q=90&src=%2Fassets%2Fgallery%2F1%2F567.jpg', 'https://nevatrip.ru/assets/components/gallery/connector.php?action=web/phpthumb&ctx=web&w=940&h=940&zc=0&far=&q=90&src=%2Fassets%2Fgallery%2F1%2F566.jpg'],
    fromPhoto: 'https://nevatrip.ru/connectors/system/phpthumb.php?w=400&h=400&aoe=0&far=0&src=./astra.jpg&source=2',
    remarkPositionTop: 'инфо сверху',
    remarkPositionBottom: 'инфо снизу',
    textBeforeFinalPrice: 'Ваши яркие воспоминания всего за',
    fromPoint: '[Адмиралтейская наб. 2 (спуск со львами)](https://maps.yandex.ru/-/CVGKJVkQ) или Фонтанка, 21 (Фаберже)',
    fromContacts: '8 812 244-98-24',
    excursion: ['русский', 'английский', 'испанский'],
    map: '<iframe src="https://www.google.com/maps/d/embed?mid=1X7sIzuGoqX09zuvdTwdU10tEyO0" width="100%" height="450"></iframe>',
    showplaces: ['Адмиралтейство', 'Зимний Дворец (Эрмитаж)', 'Петропавловская крепость', 'Летний сад', 'Летний дворец Петра I', 'Чижик-Пыжик', 'Инженерный замок', 'Шереметьевский дворец', 'Цирк', 'Аничков мост', 'Марсово поле', 'Кунсткамера', 'Стрелка В.О.', 'Дворец Меньшикова', 'Медный Всадник', 'Исаакиевский собор',],
    advice: [
      'Не берите с собой крупногабаритные вещи (по технике безопасности).',
      'Вы мете слушать русскую экскурсию через наушники.',
      'В связи с изменением уровня воды маршрут экскурсии меняется на Фонтанка-Нева-Фонтанка, время подходов к остановкам при этом не меняется.',
      'Будьте внимательны в вечернее время: с 19.00 осуществляется только высадка пассажиров, подробный график для каждого причала вы можете посмотреть в расписании (оно находится в фотогалерее).',
    ],
    price: '1490',//'850',
    priceDiscount: '750',
    priceChild: '600',
    priceTwo: '1000',
    priceBackForth:'1100',
    priceOutside: 'не реализуется',//'1050',
    priceInfo: 'Описание стоимости',
    startDate: '04.05.2019',
    dateDisabled: '',
    dateTimeOffset: '18:00(0)',
    endDate: '30.09.2019',
    excludedDays: [],
    startTime: ['11:00', '13:00', '14:15'],
    startPoints: 'СПб-Петергоф',
    promoCodes: ['promo'],
    staticMap: '<img src="https://api-maps.yandex.ru/services/constructor/1.0/static/?sid=np2aPzCrFAQzcj-h0ONKElIAbLPJAkZU&width=600&height=450" alt=""/>',
    needPrintTicket: true,
    duration: '2 часа',
    time: 'Отправление каждый час 11:00-19:00 (ежед). Билет действует целый день',
    vehicle: 'Теплоходы-кабриолеты «Пальмира» с откидным верхом',
    onBoat: ['туалет', 'экскурсия', 'бар'],
    filters: ['С экскурсией', 'Для двоих', 'Для компаний', 'Для туристических групп', 'С детьми', 'Билет на целый день', 'По рекам и каналам'],
    timesOfDay: ['День', 'Вечер'],
    priceCategory: 'От 1000 до 2000 руб.',
  };
  const meta = data.meta || {};
  const og = meta.og || {};

  Object.defineProperty(service, "discount", {
    get: function() {
      return '15% от цены на причале при бронировании онлайн! Есть льготный ('+ this.priceDiscount +'р) и детский ('+ this.priceChild +'р) билет. До 3 лет - бесплатно.';
    }
  });

  if ( ctx.context ) return ctx.context;

  return {
    block: 'page',
    title: data.title || config.appName,
    favicon: '/favicon.ico',
    itemtype: 'http://schema.org/LocalBusiness',
    prefix: 'og: http://ogp.me/ns#',

    styles: { elem: 'css', url: `/assets/css/${ data.page }.${ level }.min.css` },
    // scripts: { elem: 'js', url: `/assets/js/${ data.page }.${ level }.min.js` },
    head: [
      { elem: 'meta', attrs: { name: 'viewport', content: 'width=device-width, initial-scale=1' } },

      // favicons
      { elem: 'link', attrs: { rel: 'apple-touch-icon', sizes: '180x180', href:'/apple-touch-icon.png' } },
      { elem: 'link', attrs: { rel: 'icon', type: 'image/png', sizes: '32x32', href:'/favicon-32x32.png' } },
      { elem: 'link', attrs: { rel: 'icon', type: 'image/png', sizes: '16x16', href:'/favicon-16x16.png' } },
      { elem: 'link', attrs: { rel: 'manifest', href: '/manifest.json' } },
      { elem: 'link', attrs: { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color:'#309acd' } },
      { elem: 'meta', attrs: { name: 'msapplication-TileColor', content: '#309acd' } },
      { elem: 'meta', attrs: { name: 'theme-color', content: '#309acd' } },

      // meta
      { elem: 'meta', attrs: { name: 'apple-mobile-web-app-title', content: 'name' } },
      { elem: 'meta', attrs: { name: 'application-name', content: config.appName } },
      { elem: 'meta', attrs: { name: 'description', content: meta.description } },
      // { elem: 'meta', attrs: { property: 'og:title', content: og.title || data.title || config.appName } },
      { elem: 'meta', attrs: { property: 'og:description', content: meta.description } },
      // { elem: 'meta', attrs: { property: 'og:url', content: og.url || data.url.pathname } },
      // { elem: 'meta', attrs: { property: 'og:image', content: og.image } },
      { elem: 'meta', attrs: { property: 'og:image:width', content: "279" } },
      { elem: 'meta', attrs: { property: 'og:image:height', content: "279" } },
      { elem: 'meta', attrs: { property: 'og:site_name', content: config.appName } },
      { elem: 'meta', attrs: { property: 'og:locale', content: 'ru_RU' } }, //TODO add lang
      { elem: 'meta', attrs: { property: 'og:type', content: 'website' } }

    ],
    // mods: { route: node.data.view || node.data.page, js: true }
  };
} );
