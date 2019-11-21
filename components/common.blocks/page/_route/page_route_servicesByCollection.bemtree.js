block( 'page' ).mod( 'route', 'servicesByCollection' )(
  mods()( node => [
    {
      block: 'title',
      mods: { view: 'xl' },
      url: node._urlFor( ( ( ( ( node.data.api || {} ).serviceCategoryFull || {} ).titleImage || {} ).asset || {} )._ref ).url() || '',
      title: ( ( ( ( node.data.api || {} ).serviceCategoryFull || {} ).title || {} )[node.currentLang] || {} ).name || ''
    },
    node.data.api.services && {
      block: 'page',
      elem: 'content',
      content: [
        {
          block: 'breadcrumbs',
          title: ( ( ( node.data.api || {} ).serviceCategoryFull || {} ).titleArticle || {} )[node.currentLang] || ( ( ( ( node.data.api || {} ).serviceCategoryFull || {} ).title || {} )[node.currentLang] || {} ).name || ''
        },
        {
          block: 'list',
          mods: { view: 'no-style' },
          content: node.data.api.services.map( item => ( {
            elem: 'item',
            content: {
              block: 'service',
              mods: { view: 'list-item-lg' },
              service: item,
              lang: [node.currentLang],
              moreText: ( ( node.data.api.settingService || {} ).serviceViewListItemLgMore || {} )[node.currentLang],
              serviceAlias: ( ( item.title[node.currentLang] || {} ).key || {} ).current || '//',
              categoryAlias: ( ( ( ( item.category || {} ).title || {} )[node.currentLang] || {} ).key || {} ).current || '//',
              servicePriceOutside: ( ( node.data.api.settingService || {} ).servicePriceOutside || {} )[node.currentLang] || ''
            }
          } ) )
        }
      ]
    }
  ] ),
);
