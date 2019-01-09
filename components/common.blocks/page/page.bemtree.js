block( 'page' )(
  content()( node => {
    return [
      {
        block: 'header',
        mods: {inverse: node.ctx.foo === 'bar'},
        logo: 'logo_md.png',
        logoDescription: 'Водные экскурсии по рекам и каналам Петербурга, прогулки по Неве на теплоходе NevaTrip',
        slogan: 'Лучшие водные экскурсии по Петербургу',
        langs: ['ru', 'en', 'zh']
      },
      {
        block: 'navigation',
        navigation: [
          {
            title: 'Дневные&nbsp;экскурсии',
            subtitle: 'по рекам и каналам Петербурга',
            url: '/day'
          },
          {
            title: 'Ночные прогулки',
            subtitle: 'под развод мостов',
            url: '/night'
          },
          {
            title: 'Метеор',
            subtitle: 'в Петергоф и пригороды',
            url: '/meteors'
          },
          {
            title: 'Аренда теплохода',
            subtitle: 'на свадьбу, корпоратив',
            url: '/arenda-teplokhoda'
          }
        ]
      },
      apply('mods'),
      {
        block: 'page',
        elem: 'spreader'
      },
      {
        block: 'footer',
        awards: [
          'Лучшая компания 2014 года всероссийской программы «Ты — предприниматель» в Санкт-Петербурге',
          '1 место «Молодой предприниматель России 2015» в номинации «Сфера услуг»'
        ],
        social: [
          {
            name: 'vk',
            url: 'https://vk.com/neva.trip',
          },
          {
            name: 'ig',
            url: 'https://www.instagram.com/nevatrip.ru/',
          },
          {
            name: 'tg',
            url: 'tg://resolve?domain=nevatrip_bot',
          }
        ],
        mainNavHeading: 'А&nbsp;здесь ещё больше подборок с&nbsp;прогулками и&nbsp;экскурсиями:',
        mainNav: [
          {
            name: 'Причалы Санкт-Петербурга',
            url: '/prichaly-sankt-peterburga'
          },
          {
            name: 'Активные водные прогулки',
            url: '/active'
          },
          {
            name: 'Корпоратив на теплоходе',
            url: '/korporativ-na-teplohode'
          },
          {
            name: 'Экскурсии по Неве с гидом',
            url: '/ekskursii-po-neve'
          },
          {
            name: 'Прогулки по рекам и каналам',
            url: '/progulki-po-rekam-i-kanalam-peterburga'
          },
          {
            name: 'Выпускной на теплоходе',
            url: '/vipusknoy-na-teplokhode'
          },
          {
            name: 'Экскурсии на развод мостов с гидом',
            url: '/ekskursii-na-razvod-mostov'
          },
          {
            name: 'Прогулки по Неве на теплоходе',
            url: '/progulki-po-neve-na-teplohode'
          },
          {
            name: 'День рождения на теплоходе',
            url: '/den-rojdeniya-na-teplokhode'
          },
          {
            name: 'Недорогие экскурсии: цены 2019',
            url: '/ekskursii-po-peterburgu-tsena'
          },
          {
            name: 'Экскурсии по пригородам Петербурга',
            url: '/ehkskursii-po-prigorodam-peterburga'
          },
          {
            name: 'Банкет на теплоходе',
            url: '/banket-na-teplohode'
          },
          {
            name: 'Романтический вечер на теплоходе',
            url: '/romanticheskij-vecher-dlya-dvoih-spb'
          },
          {
            name: 'Музыкальные и джазовые теплоходы',
            url: '/muzykalnij-teplohod'
          },
          {
            name: 'Свадьба на теплоходе',
            url: '/svadba-na-teplokhode'
          },
          {
            name: 'Ресторан на теплоходе',
            url: '/restoran-na-teplohode'
          },
          {
            name: 'Прогулки на речном трамвайчике',
            url: '/rechnoj-tramvajchik-peterburga'
          },
          {
            name: 'Групповые экскурсии по Петербургу',
            url: '/gruppovye-ehkskursii-po-peterburgu'
          },
          {
            name: 'Экскурсии для детей',
            url: '/ekskursii-dlya-detey-spb'
          },
        ],
        basicNav: [
          {
            name: 'О&nbsp;нас',
            url: '/about'
          },
          {
            name: 'Оферта',
            url: '/oferta'
          },
          {
            name: 'Сотрудничество',
            url: '/sotrudnichestvo'
          },
          {
            name: 'Наш Блог',
            url: '/blog'
          },
          {
            name: 'Личный кабинет',
            url: '/partner'
          },
          {
            name: 'Прогулки в&nbsp;Москве',
            url: 'https://moskvatrip.ru/'
          },
        ],
        copyright: "&copy;&nbsp;2014&ndash;2018 Санкт-Петербург, ул&nbsp;Малая Морская&nbsp;11"
      },
    ]
  }),
  addMods()( node => ( { route: node.data.view || node.data.page } ) )
);

