block('header').elem('langs')(
  content()( (node, ctx) => {
    const currentLang = node.data.params.lang;

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
