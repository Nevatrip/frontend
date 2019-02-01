block('header').elem('langs')(
  content()( (node, ctx) => {
    return ctx.langs.map( item => ( item !== ctx.currentLang && {
      block: 'link',
      mix:  { block: 'header', elem: 'lang' },
      content: item,
      url: node.data.page + '/' + item
    }) )
  } )
);
