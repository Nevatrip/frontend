block( 'filter' ).elem( 'basic-tags' )(
  content()( ( node, ctx ) => ( {
    block: 'checkbox-group',
    mix: { block: node.block, elem: node.elem },
    mods: { type: 'button' },
    name: 'filter__basic-tags',
    options: ctx.basicTags ?
      ctx.basicTags.filter( item => item.title[node.currentLang] ).map( item => (
        {
          val: item.key.current,
          title: ( item.subTitle || {} )[node.currentLang] || '',
          text: { html: item.title[node.currentLang] || '' }
        }
      ) ) :
      ''
  } ) )
);
