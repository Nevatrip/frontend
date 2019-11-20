block( 'page' ).mod( 'route', 'index' )(
  mods()( node => {
    const serviceBasedData = node.data.api.serviceBasedData;
    const settingTopFeatures = node.data.api.settingTopFeatures;
    const settingBottomFeatures = node.data.api.settingBottomFeatures;
    const settingService = node.data.api.settingService;
    const currentLang = node.data.params.lang;

    return [
      ( node.data.api || {} ).serviceBanner && {
        block: 'service',
        mods: { view: 'banner' },
        service: ( node.data.api || {} ).serviceBanner || ''
      },
      {
        block: 'features',
        features: settingTopFeatures
      },
      {
        block: 'filter',
        bg: '/filter__header.jpg',
        dayHeading: 'Время суток',
        dayTags: [
          {
            name: 'День',
            img: '<svg style="overflow:visible" xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 23 23"><g fill="none" fill-rule="evenodd" stroke="#FFD84A"><path d="M11.5 7.429a4.071 4.071 0 1 1 0 8.142 4.071 4.071 0 0 1 0-8.142z"></path><path stroke-linecap="round" d="M11.5 5.071V1M11.5 22v-4.071M17.929 11.5H22M1 11.5h4.071M17 7.357L18.357 6M6 18.357L7.357 17M17 17l1.357 1.357M6 6l1.357 1.357"></path></g></svg>'
          },
          {
            name: 'Вечер',
            img: '<svg style="overflow:visible" xmlns="http://www.w3.org/2000/svg" width="19" height="17" viewBox="0 0 19 17"><g fill="#FFD84A" fill-rule="evenodd"><path d="M9.5 17a.59.59 0 0 1-.42-.177l-2.2-2.252H.593A.6.6 0 0 1 0 13.964c0-.334.266-.607.594-.607h6.531c.158 0 .309.064.42.177l1.955 2 1.955-1.998a.588.588 0 0 1 .42-.179h6.531c.328 0 .594.273.594.607a.6.6 0 0 1-.594.607h-6.285l-2.202 2.252A.585.585 0 0 1 9.5 17M14.535 12.143a.581.581 0 0 1-.202-.037.61.61 0 0 1-.357-.777 4.787 4.787 0 0 0 .274-1.615c0-2.679-2.13-4.857-4.75-4.857S4.75 7.035 4.75 9.714c0 .56.092 1.103.273 1.615a.611.611 0 0 1-.356.777.588.588 0 0 1-.76-.364 6.067 6.067 0 0 1-.344-2.028c0-3.348 2.663-6.071 5.937-6.071 3.274 0 5.938 2.723 5.938 6.071 0 .7-.117 1.383-.345 2.028a.595.595 0 0 1-.558.4M9.5 2.428a.6.6 0 0 1-.594-.607V.607A.6.6 0 0 1 9.5 0a.6.6 0 0 1 .594.607v1.214a.6.6 0 0 1-.594.607M1.781 10.321H.594A.6.6 0 0 1 0 9.714a.6.6 0 0 1 .594-.607H1.78a.6.6 0 0 1 .594.607.6.6 0 0 1-.594.607M18.406 10.321H17.22a.6.6 0 0 1-.594-.607.6.6 0 0 1 .594-.607h1.187a.6.6 0 0 1 .594.607.6.6 0 0 1-.594.607M4.042 4.74a.59.59 0 0 1-.42-.176l-.84-.86a.617.617 0 0 1 0-.859.585.585 0 0 1 .84 0l.84.859a.617.617 0 0 1 0 .858.581.581 0 0 1-.42.179M14.957 4.74a.59.59 0 0 1-.42-.176.617.617 0 0 1 0-.859l.84-.858a.585.585 0 0 1 .84 0 .62.62 0 0 1 0 .858l-.84.859a.59.59 0 0 1-.42.177"></path></g></svg>'
          },
          {
            name: 'Ночь',
            img: '<svg style="overflow:visible" xmlns="http://www.w3.org/2000/svg" width="22" height="13" viewBox="0 0 22 13"><g fill="none" fill-rule="evenodd"><path d="M0 9.032h14.864v.941H0z"></path><path fill="#FFD84A" d="M14.864 9.503c0-.26-.238-.47-.53-.47H.53c-.291 0-.53.21-.53.47s.239.47.53.47h13.806a.56.56 0 0 0 .374-.137.443.443 0 0 0 .155-.333M1.548 7h5.904C7.754 7 8 6.776 8 6.5S7.754 6 7.452 6H1.548C1.246 6 1 6.224 1 6.5s.246.5.548.5M13 6.5c0-.276-.265-.5-.591-.5h-1.817c-.327 0-.592.224-.592.5s.265.5.592.5h1.817c.326 0 .591-.224.591-.5M8.485 12h-3.97a.509.509 0 0 0-.515.5c0 .275.231.5.515.5h3.97A.509.509 0 0 0 9 12.5c0-.276-.231-.5-.515-.5"></path><path fill="#FFD84A" d="M21.34 9.42a5.406 5.406 0 0 1-4.433-2.96 5.208 5.208 0 0 1-.547-2.337c0-1.094.337-2.147.975-3.045a.535.535 0 0 0 .04-.542.562.562 0 0 0-.46-.308c-3.067-.225-5.9 1.778-6.713 4.668h1.144a5.347 5.347 0 0 1 4.048-3.51l.523-.102-.197.49a6.27 6.27 0 0 0-.453 2.349c0 .986.222 1.933.659 2.813a6.498 6.498 0 0 0 3.842 3.273l.506.16-.41.334a5.427 5.427 0 0 1-5.875.63H12.09A6.527 6.527 0 0 0 16.444 13a6.509 6.509 0 0 0 5.303-2.732.536.536 0 0 0-.407-.848"></path></g></svg>'
          }
        ],
        basicHeading: 'Параметры прогулки',
        basicTags: node.data.api.tags,
        sorting: ['По популярности', 'По цене от наименьшей', 'По цене от наибольшей'],
        allServices: node.data.api.servicesFilter,
        lang: currentLang,
        moreText: ( ( settingService || {} ).serviceViewListItemLgMore || {} )[currentLang],
        mainUrl: '/',
        servicePriceOutside: ( ( settingService || {} ).servicePriceOutside || {} )[currentLang] || ''
      },
      {
        block: 'page',
        elem: 'article',
        content: [
          {
            block: 'title',
            mods: { view: 'sm' },
            url: node._urlFor( serviceBasedData.articleImage.asset._ref ).url() || '',
            title: serviceBasedData.articleTitle[currentLang] || ''
          },
          {
            block: 'features',
            features: settingBottomFeatures
          },
          {
            block: 'page',
            elem: 'hr',
            elemMods: { size: 'md' }
          },
          {
            block: 'page',
            elem: 'content',
            elemMods: { view: 'narrow' },
            content: {
              html: serviceBasedData.articleContent[currentLang] || ''
            }
          },
          {
            block: 'page',
            elem: 'hr',
            elemMods: { size: 'md' }
          }
        ]
      }
    ];
  } ),
);

