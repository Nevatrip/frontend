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
          ctx.excursion && ['Язык экскурсии: ', ctx.excursion.map(lang => ({
            block: 'image',
            mods: {view: 'icon'},
            url: lang.url,
            alt: lang.name,
            title: lang.name,
          }))],
          ctx.placeFeatures && ['На борту: ', ctx.placeFeatures.map(placeFeature => ({
            block: 'image',
            mods: {view: 'colored-icon'},
            url: placeFeature.url,
            alt: placeFeature.name,
            title: placeFeature.name,
          }))],
          ctx.routeMap && [{block: 'link', url: '#map', content: 'Посмотреть маршрут прогулки'}],
        ].map(item => (item && {
          elem: 'item',
          content: [
            {
              block: 'text',
              mods: {weight: 'bold'},
              content: item[0]
            },
            (typeof item[1] === 'string' || item[1] instanceof String)
              ? {html: marked(item[1] || '')}
              : (item[1] || '')
          ]
        })),
      }
    ]
  })
);
