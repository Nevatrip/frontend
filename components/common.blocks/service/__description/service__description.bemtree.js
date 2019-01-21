block('service').elem('description')(
  content()((node, ctx) => {
    return [
      {
        block: 'list',
        mods: {
          type: 'disk',
          size: 'md'
        },
        content: [
          ctx.duration && ['Длительность: ', ctx.duration],
          ctx.time && ['Расписание: ', ctx.time],
          ctx.fromPoint && ['Отправление: ', ctx.fromPoint],
          ctx.vehicle && ['Теплоход: ', ctx.vehicle],
          ctx.excursion && ['Язык экскурсии: ', ctx.excursion],
          ctx.placeFeatures && ['На борту: ', ctx.placeFeatures.map( placeFeature => ({
            block: 'image',
            mods: {view: 'colored-icon'},
            url: placeFeature.url,
            alt: placeFeature.name,
            title: placeFeature.name,
          }) )],
          [{ block: 'link', url: '#map', content: 'Посмотреть маршрут прогулки' }],
        ].map(item => (item && {
          elem: 'item',
          content: [
            {
              block: 'text',
              mods: { weight: 'bold' },
              content: item[0]
            },
            item[1] || ''
          ]
        })),
      }
    ]
  })
);
