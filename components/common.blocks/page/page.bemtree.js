block( 'page' )(
  content()( node => {
    const serviceBasedData = node.data.api.serviceBasedData;
    const currentLang = node.currentLang = node.data.params.lang;

    return [
      {
        block: 'header',
        logo: urlFor( serviceBasedData.logo.asset._ref ).url() || '',
        logoDescription: serviceBasedData.shortDescription[currentLang] || '',
        logoTitle: serviceBasedData.title[currentLang] || '',
        slogan: serviceBasedData.Slogan[currentLang] || ''
      },
      {
        block: 'navigation',
        content: node.data.api.navigation[0] || {}
      },
      apply( 'mods' ),
      {
        block: 'page',
        elem: 'spreader'
      },
      {
        block: 'footer',
        awards: serviceBasedData.awards[currentLang].split( '\n' ) || '',
        mainNavHeading: serviceBasedData.footerCategoryTitle[currentLang] || '',
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
          }
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
          }
        ],
        copyright: serviceBasedData.copyright[currentLang] || ''
      }
    ]
  } ),
  addMods()( node => ( { route: node.data.view || node.data.page } ) )
);

