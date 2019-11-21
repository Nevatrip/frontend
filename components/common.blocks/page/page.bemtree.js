block( 'page' )(
  content()( node => {
    const serviceBasedData = node.data.api.serviceBasedData;
    const currentLang = node.currentLang = node.data.params.lang;
    const settingServicesCollections = node.data.api.settingServicesCollections;
    const settingSocials = node.data.api.settingSocials;

    return [
      {
        block: 'header',
        logo: node._urlFor( serviceBasedData.logo.asset._ref ).url() || '',
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
        mainNav: settingServicesCollections.map( item => (
          {
            name: ( ( item.title || {} )[node.currentLang] || {} ).name,
            route: 'servicesByCollection',
            collection: ( ( ( item.title || {} )[node.currentLang] || {} ).key || {} ).current || ''
          }
        ) ),
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
        copyright: serviceBasedData.copyright[currentLang] || '',
        social: settingSocials
      }
    ]
  } ),
  addMods()( node => ( { route: node.data.view || node.data.page } ) )
);

