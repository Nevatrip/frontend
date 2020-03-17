block( 'service' ).elem( 'buy' )(
  content()( ( {
    data: {
      params: {
        lang: currentLang
      },
      api: {
        settingService
      },
      session
    }
  }, {
    id,
    price,
    title = '',
    priceOutside,
    noDirectionBtn,
    fullSchedule

    // urlBuy,
    // route,
    // params,
  } ) => {
    const content = ( ( settingService || {} ).serviceBuyLink || {} )[currentLang] || '';

    return [
      {
        block: 'page',
        elem: 'row',
        content: [
          price && {
            block: 'service',
            elem: 'price',
            elemMods: { view: 'md' },
            content: price
          },
          {
            block: 'form',
            mods: { view: 'add-to-cart' },
            id,
            session,
            title,
            content,
            noDirectionBtn,
            fullSchedule
          }
        ]
      },
      priceOutside && {
        elem: 'price-outside',
        content: priceOutside
      }
    ]
  } ),
);
