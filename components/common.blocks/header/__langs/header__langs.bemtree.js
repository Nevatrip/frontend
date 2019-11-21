block( 'header' ).elem( 'langs' )(
  content()( node => {
    const currentLang = node.data.params.lang;
    const serviceBasedData = node.data.api.serviceBasedData;

    const getRoute = page => {
      const routeKey = {
        servicesByCollection: 'serviceCategoryFull',
        servicesByCategory: 'serviceCategoryFull',
        service: 'service',
        index: 'index'
      };

      const response = ( node.data.api || {} )[routeKey[page]];

      const otherLangs = node.config.langs
        .filter( lang => lang !== currentLang )
        .map( lang => ( ( ( response || {} ).title || {} ) ).hasOwnProperty( lang ) ?
          {
            alias: ( response || {} ).title[lang].key.current || null,
            lang
          } :
          {
            root: true,
            lang
          } );


      return [
        otherLangs.map( item => {
        // const routeParams = {
        //   service: ( response || {} ).category && {
        //     category: ( ( response.category.title[item.lang] || {} ).key || {} ).current || '',
        //     service: item.alias || ''
        //   },
        //   servicesByCategory: {
        //     category: item.alias || ''
        //   },
        //   servicesByCollection: {
        //     collection: item.alias || ''
        //   },
        //   index: {}
        // };

          return serviceBasedData.langSiteLink[item.lang] && {
            block: 'link',
            mix: { block: 'header', elem: 'lang' },
            content: item.lang,
            url: serviceBasedData.langSiteLink[item.lang]

            // to: item.root ? 'root' : page,
            // params: {
            //   lang: item.lang,
            //   ...routeParams[page]
            // }
          }
        } ),
        {
          block: 'link',
          mix: { block: 'header', elem: 'lang' },
          content: currentLang
        }
      ]
    };

    return getRoute( node.data.page )
  } )
);
