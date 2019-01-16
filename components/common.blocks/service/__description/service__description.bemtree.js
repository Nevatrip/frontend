block('service').elem('description')(
  content()((node, ctx) => {
    return [
      {
        block: 'list',
        mods: {type: 'disk', size: 'md'},
        items: [
          ctx.duration && ['Длительность: ', ctx.duration],
          ctx.time && ['Расписание: ', ctx.time],
          ctx.fromPoint && ['Отправление: ', ctx.fromPoint],
          ctx.vehicle && ['Теплоход: ', ctx.vehicle],
          ctx.excursion && ['Язык экскурсии: ', ctx.excursion],
          ctx.placeFeatures && ['На борту: ', ctx.placeFeatures],
          ['[Посмотреть маршрут прогулки](#map)'],//markdown????
        ].map(item => ({
          content: {
            html: '<b>' + item[0] + '</b>' + (item[1] ? item[1] : '')
          }
        })),
      }
    ]
  })
);

