block('header').elem('langs')(
  content()( (node, ctx) => {
    const currentLang = node.data.params.lang;

    const service = ( node.data.api || {} ).service || {};

    if ( service ) {
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

      console.log( otherLangs );

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


    return ctx.langs.map( item => ( item !== currentLang && {
      block: 'link',
      mix:  { block: 'header', elem: 'lang' },
      content: item,
      to: node.data.page,
      params: {
        lang: item,
        category: node.data.params.category || '',
        service: node.data.params.service || ''
      },
    }) )
  } )
);
