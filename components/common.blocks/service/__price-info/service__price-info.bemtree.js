block('service').elem('price-info')(
  content()((node, ctx) => {
    return [
      {
        block: 'list',
        mods: {type: 'disk', size: 'md'},
        items: [
          [
            'Скидка: ',
            ctx.discount
          ],
          ['', 'Пассажиры до 18 лет допускаются на борт в присутствии старших сопровождающих.'],
        ].map( item => ( {
          content: {
            html: '<b>' + item[0] + '</b>' + (item[1]?item[1]:'')
          }
        } ) ),
      },
      {
        block: 'popup-tip',
      },
    ]
  })
);
