block('service').elem('description')(
  content()((node, ctx) => {
    return [
      {
        block: 'list',
        mods: {type: 'disk', size: 'md'},
        items: [
          ['Длительность: ', ctx.duration],
          ['Расписание: ', ctx.time],
          ['Отправление: ', ctx.fromPoint],
          ['Теплоход: ', ctx.vehicle],
          ['Язык экскурсии: ', ctx.excursion],
          ['На борту: ', ctx.onBoat],
          ['[Посмотреть маршрут прогулки](#map)'],//markdown????
        ].map( item => ( {
          content: {
            html: '<b>' + item[0] + '</b>' + (item[1]?item[1]:'')
          }
        } ) ),
      }
    ]
  })
);

