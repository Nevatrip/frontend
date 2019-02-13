block('header').elem('langs')(
  content()( (node, ctx) => {
    // console.log('↓↓_↓↓_↓↓_↓↓_↓↓_↓↓_↓↓_↓↓_↓↓_↓↓_↓↓_↓↓_↓↓_↓↓_↓↓');
    // console.log(node.data.page);
    // console.log('↑↑_↑↑_↑↑_↑↑_↑↑_↑↑_↑↑_↑↑_↑↑_↑↑_↑↑_↑↑_↑↑_↑↑_↑↑_');

    const currentLang = node.data.params.lang;

    /*
    if ( node.data.page === 'service' ) {
      const service = ( node.data.api || {} ).service;
      const currentAlias = service.title[ currentLang ].key.current;

      const otherLangs = node.config.langs
        .filter( lang => lang !== currentLang )
        .map( lang => {
          return service.title.hasOwnProperty( lang )
            ? {
                alias: service.title[ lang ].key.current,
                lang: lang
              }
            : {
                root: true,
                lang: lang
              }
        });

      return otherLangs.map( item => ( {
        block: 'link',
        mix:  { block: 'header', elem: 'lang' },
        content: item.lang,
        to: item.root ? 'root' : 'service',
        params: {
          lang: item.lang,
          category: node.data.params.category || '',
          service: item.alias || ''
        },
      }) )
    }

    if ( node.data.page === 'servicesByCategory' ) {
      const servicesByCategory = ( node.data.api || {} ).serviceCategoryFull;

      const currentAlias = servicesByCategory.title[ currentLang ].key.current;

      const otherLangs = node.config.langs
        .filter( lang => lang !== currentLang )
        .map( lang => {
          return servicesByCategory.title.hasOwnProperty( lang )
            ? {
                alias: servicesByCategory.title[ lang ].key.current,
                lang: lang
              }
            : {
                root: true,
                lang: lang
              }
        });

      return otherLangs.map( item => ( {
        block: 'link',
        mix:  { block: 'header', elem: 'lang' },
        content: item.lang,
        to: item.root ? 'root' : 'servicesByCategory',
        params: {
          lang: item.lang,
          category: item.alias || '',
        },
      }) )
    }
    */

    const getRoute = ( page ) => {
      const routeKey = {
        servicesByCategory: 'serviceCategoryFull',
        service: 'service'
      }

      const response = ( node.data.api || {} )[ routeKey[ page ] ];


      const currentAlias = response.title[ currentLang ].key.current;
      const otherLangs = node.config.langs
        .filter( lang => lang !== currentLang )
        .map( lang => {
          return response.title.hasOwnProperty( lang )
            ? {
                alias: response.title[ lang ].key.current,
                lang: lang
              }
            : {
                root: true,
                lang: lang
              }
        });


      return otherLangs.map( item => {
        console.log('');
        console.log( response.title[ lang ].key.current );
        console.log('');
        console.log('');

        const routeParams = {
          service: {
            category: response.category.title[ item.lang ].key.current || '',
            service: item.alias || ''
          },
          servicesByCategory: {
            category: item.alias || '',
          }

          `${}`: {

          }
        }

        return {
          block: 'link',
          mix:  { block: 'header', elem: 'lang' },
          content: item.lang,
          to: item.root ? 'root' : page,
          params: {
            lang: item.lang,
            ...routeParams[ page ]
          },
        }
      })
    }

    return getRoute( node.data.page )

    // return node.config.langs.map( item => ( item !== currentLang && {
    //   block: 'link',
    //   mix:  { block: 'header', elem: 'lang' },
    //   content: item,
    //   to: node.data.page,
    //   params: {
    //     lang: item,
    //     category: node.data.params.category || '',
    //     service: node.data.params.service || ''
    //   },
    // }) )
  } )
);
