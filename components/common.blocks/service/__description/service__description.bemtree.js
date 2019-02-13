block('service').elem('description')(
  content()((node, ctx) => {
    const currentLang = node.data.params.lang;

    return [
      {
        block: 'list',
        mods: {
          type: 'disk',
          size: 'md'
        },
        content: [
          ctx.duration      && [(((node.data.api.settingService && node.data.api.settingService.serviceDescriptionDuration      && node.data.api.settingService.serviceDescriptionDuration[currentLang])      ? node.data.api.settingService.serviceDescriptionDuration[currentLang]      : '') +': '), ctx.duration],
          ctx.time          && [(((node.data.api.settingService && node.data.api.settingService.serviceDescriptionTime          && node.data.api.settingService.serviceDescriptionTime[currentLang])          ? node.data.api.settingService.serviceDescriptionTime[currentLang]          : '') +': '), ctx.time],
          ctx.fromPoint     && [(((node.data.api.settingService && node.data.api.settingService.serviceDescriptionFromPoint     && node.data.api.settingService.serviceDescriptionFromPoint[currentLang])     ? node.data.api.settingService.serviceDescriptionFromPoint[currentLang]     : '') +': '), ctx.fromPoint],
          ctx.vehicle       && [(((node.data.api.settingService && node.data.api.settingService.serviceDescriptionVehicle       && node.data.api.settingService.serviceDescriptionVehicle[currentLang])       ? node.data.api.settingService.serviceDescriptionVehicle[currentLang]       : '') +': '), ctx.vehicle],
          ctx.excursion     && [(((node.data.api.settingService && node.data.api.settingService.serviceDescriptionExcursion     && node.data.api.settingService.serviceDescriptionExcursion[currentLang])     ? node.data.api.settingService.serviceDescriptionExcursion[currentLang]     : '') +': '), ctx.excursion.map(lang => ({
            block: 'image',
            mods: {view: 'icon'},
            url: lang.url,
            alt: lang.name,
            title: lang.name,
          }))],
          ctx.placeFeatures && [(((node.data.api.settingService && node.data.api.settingService.serviceDescriptionPlaceFeatures && node.data.api.settingService.serviceDescriptionPlaceFeatures[currentLang]) ? node.data.api.settingService.serviceDescriptionPlaceFeatures[currentLang] : '') +': '), ctx.placeFeatures.map(placeFeature => ({
            block: 'image',
            mods: {view: 'colored-icon'},
            url: placeFeature.url,
            alt: placeFeature.name,
            title: placeFeature.name,
          }))],
          ctx.routeMap && [
            {
              block: 'link',
              url: '#map',
              content:           ((node.data.api.settingService && node.data.api.settingService.serviceDescriptionRouteMap      && node.data.api.settingService.serviceDescriptionRouteMap[currentLang])      ? node.data.api.settingService.serviceDescriptionRouteMap[currentLang] : '')
            }
          ],
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
