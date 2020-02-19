block( 'schema' ).mod( 'type', 'offer' )(
  content()( ( node, ctx ) => [
    ctx.price && {
      block: 'schema',
      elem: 'itemprop',
      itemprop: 'price',
      content: ctx.price
    },
    ctx.priceCurrency && {
      block: 'schema',
      elem: 'itemprop',
      itemprop: 'priceCurrency', //Валюта (в 3-х буквенном формате ISO 4217 ) цены предложения. ( RUB, EUR, ... )
      content: ctx.priceCurrency
    },
    ctx.lowPrice && {
      block: 'schema',
      elem: 'itemprop',
      itemprop: 'lowPrice',
      content: ctx.lowPrice
    },
    ctx.highPrice && {
      block: 'schema',
      elem: 'itemprop',
      itemprop: 'highPrice',
      content: ctx.highPrice
    },
    ctx.category && {
      block: 'schema',
      elem: 'itemprop',
      itemprop: 'category',
      content: ctx.category
    },
    ctx.name && {
      block: 'schema',
      elem: 'itemprop',
      itemprop: 'itemOffered', //Название того, что продается.
      content: ctx.name
    }
  ] ),
);
