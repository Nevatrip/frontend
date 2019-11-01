block( 'header' ).elem( 'langs' )(
  content()( node => {
    const currentLang = node.data.params.lang;

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


      return otherLangs.map( item => {
        const routeParams = {
          service: ( response || {} ).category && {
            category: ( ( response.category.title[item.lang] || {} ).key || {} ).current || '',
            service: item.alias || ''
          },
          servicesByCategory: {
            category: item.alias || ''
          },
          servicesByCollection: {
            collection: item.alias || ''
          },
          index: {}
        };

        return {
          block: 'link',
          mix: { block: 'header', elem: 'lang' },
          content: item.lang,
          to: item.root ? 'root' : page,
          params: {
            lang: item.lang,
            ...routeParams[page]
          }
        }
      } )
    };

    return getRoute( node.data.page )
  } )
);
