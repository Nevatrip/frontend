block('service').mod('view', 'detail')(
  content()((node, ctx) => {
    return [
      {
        block: 'title',
        url: ctx.service.img,
        alt: ctx.service.title,
        title: ctx.service.title,
      },
      {
        block: 'page',
        elem: 'content',
        content: [
          {
            block: 'service',
            elem: 'row',
            content: [
              {
                elem: 'col',
                elemMods: {'main': true},
                content: [
                  {
                    block: 'service',
                    elem: 'description',
                    duration: ctx.service.duration,
                    time: ctx.service.time,
                    fromPoint: ctx.service.fromPoint,
                    vehicle: ctx.service.vehicle,
                    excursion: ctx.service.excursion,
                    onBoat: ctx.service.onBoat
                  },
                  {
                    block: 'service',
                    elem: 'price',
                    content: ctx.service.price,
                  },
                  {
                    block: 'service',
                    elem: 'price-outside',
                    content: ctx.service.priceOutside,
                  }
                ],
              },
              {
                elem: 'col',
                elemMods: {'aside': true},
                content: [
                  {
                    block: 'service',
                    elem: 'price-info',
                    discount: ctx.service.discount,
                    time: ctx.service.time,
                  },
                ],
              },
            ]
          },
        ]
      },
    ]
  })
);
