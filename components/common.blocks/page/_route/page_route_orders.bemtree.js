// block( 'navigation' ).def()( '' );

block( 'page' ).mod( 'route', 'orders' )(
  mods()( node => {
    const orders = node.data.api.orders;

    return [
      {
        elem: 'content',
        content: {
          block: 'heading',
          mods: { size: 'xl' },
          content: 'Список заказов'
        }
      },
      {
        block: 'table',
        tag: 'table',
        attrs: {
          style: 'width: 100%'
        },
        content: orders.map( ( order, index ) => ( {
          elem: 'row',
          tag: 'tr',
          content: [
            {
              elem: 'cell',
              tag: 'td',
              content: index + 1
            },
            {
              elem: 'cell',
              tag: 'td',
              content: order.id
            },
            {
              elem: 'cell',
              tag: 'td',
              content: [
                order.user.fullname,
                { tag: 'br' },
                {
                  block: 'link',
                  url: `mailto:${ order.user.email }`,
                  content: order.user.email
                },
                { tag: 'br' },
                order.user.phone
              ]
            },
            {
              elem: 'cell',
              tag: 'td',
              content: order.products.map( ( { productId, options } ) => [
                {
                  tag: 'fieldset',
                  content: [
                    { tag: 'legend', content: productId },
                    `Направление: ${ options.direction }`,
                    { tag: 'br' },
                    `Отправление: ${ new Date(
                      options.date * 1000
                    ).toLocaleString( 'ru', {
                      day: 'numeric',
                      month: 'long',
                      year: 'numeric',
                      hour: 'numeric',
                      minute: 'numeric'
                    } ) }`,
                    { tag: 'br' },
                    `Билеты: ${ Object.keys( options.tickets ).map(
                      ticketName =>
                        `${ ticketName }: ${ options.tickets[ticketName] } шт.`
                    ) }`
                  ]
                }
              ] )
            },
            {
              elem: 'cell',
              tag: 'td',
              content: [
                `Создан: ${ new Date( order.created ).toLocaleString( 'ru', {
                  day: 'numeric',
                  month: 'long',
                  year: 'numeric',
                  hour: 'numeric',
                  minute: 'numeric'
                } ) }`,
                { tag: 'br' },
                order.updated ?
                  `Обновлён: ${ new Date( order.updated ).toLocaleString(
                    'ru',
                    {
                      day: 'numeric',
                      month: 'long',
                      year: 'numeric',
                      hour: 'numeric',
                      minute: 'numeric'
                    }
                  ) }` :
                  'Ещё не менялся',
                { tag: 'br' },
                order.status
              ]
            },
            {
              elem: 'cell',
              tag: 'td',
              content: `Сумма: ${ order.payment.Model.Amount } ₽`
            }
          ]
        } ) )
      }
    ];
  } ),
);

