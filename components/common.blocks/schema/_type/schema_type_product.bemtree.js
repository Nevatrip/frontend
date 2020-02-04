block( 'schema' ).mod( 'type', 'product' )(
  content()( ( node, ctx ) => [
    ctx.name && {
      block: 'schema',
      elem: 'itemprop',
      itemprop: 'name',
      content: ctx.name
    },
    ctx.description && {
      block: 'schema',
      elem: 'itemprop',
      itemprop: 'description',
      content: ctx.description
    },
    ctx.image && {
      block: 'schema',
      elem: 'itemprop',
      elemMods: { type: 'img' },
      itemprop: 'image',
      src: ctx.image
    },
    {
      block: 'schema',
      mods: { type: 'offer' },
      price: ctx.price || '',
      priceCurrency: ctx.priceCurrency || '', //Валюта (в 3-х буквенном формате ISO 4217 ) цены предложения. ( RUB, EUR, ... )
      lowPrice: ctx.lowPrice || '',
      highPrice: ctx.highPrice || '',
      category: ctx.category || '',
      name: ctx.name || '' //Название того, что продается
    }
  ] ),
);
