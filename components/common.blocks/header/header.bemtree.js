block('header')(
  def()( ( node, ctx ) => {
      node._logo = ctx.logo;
      node._description = ctx.description;
      node._langs = ctx.langs;
      node._slogan = ctx.slogan;
      return applyNext()
    }
  ),
  content()( ( node, ctx ) => {
    return [
      {
        elem: 'content',
        mix: { block: 'page', elem: 'content' },
        content: [
          {
            elem: 'logo',
            elemMods: {'is-link': node.data.page !== "index"}
          },
          {
            elem: 'slogan',
            elemMods: {'is-heading': node.data.page === "index"}
          },
          {
            elem: 'langs',
            currentLang: 'ru'
          },
          {
            elem: 'contacts'
          }
        ]
      }
    ]
  } )
);
