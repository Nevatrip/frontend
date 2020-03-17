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
          fullSchedule && {
            block: 'form',
            mods: { view: 'add-to-cart' },
            id,
            session,
            title,
            content,
            noDirectionBtn,
            fullSchedule
          } || {
            block: 'service',
            elem: 'text',
            content: noDirectionBtn
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
