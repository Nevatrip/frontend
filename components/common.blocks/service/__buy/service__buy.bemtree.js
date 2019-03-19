block( 'service' ).elem( 'buy' )(
  content()( ( { data }, ctx ) => {
    const currentLang = data.params.lang;

    return [
      {
        block: 'page',
        elem: 'row',
        content: [
          ctx.price && {
            block: 'service',
            elem: 'price',
            elemMods: { view: 'md' },
            content: ctx.price
          },
          {
            tag: 'form',
            attrs: {
              method: 'post',
              action: data.params.urlTo( 'cart', {
                project: data.params.project,
                lang: currentLang,
                ...ctx.params
              } )
            },
            content: [
              {
                tag: 'input',
                attrs: {
                  type: 'hidden',
                  name: 'action',
                  value: 'add'
                }
              },
              {
                tag: 'input',
                attrs: {
                  type: 'hidden',
                  name: 'serviceId',
                  value: data.api.service._id
                }
              },
              {
                block: 'button',
                mods: { type: 'submit' },

                // name: 'session',
                // val: data.session,
                text: ( ( data.api.settingService || {} ).serviceBuyLink || {} )[currentLang] || ''
              }
            ]
          }
        ]
      },
      ctx.priceOutside && {
        elem: 'price-outside',
        content: ctx.priceOutside
      }
    ]
  } ),
);
