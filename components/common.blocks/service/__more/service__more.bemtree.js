block( 'service' ).elem( 'more' )(
  replace()( ( node, ctx ) => {
    const currentLang = node.data.params.lang;

    return {
      block: 'link',
      mix: { block: node.block, elem: node.elem },
      content: {
        html: `${ ( ( node.data.api.settingService || {} ).serviceMoreLink || {} )[currentLang] || '' }`
      },
      to: ctx.route,
      params: ctx.params,
      title: ctx.title
    }
  } )
);
