block( 'service' ).elem( 'description' )(
  content()( ( node, ctx ) => {
    const currentLang = node.data.params.lang;

    return [
      {
        block: 'list',
        mods: {
          type: 'disk',
          size: 'md'
        },
        content: [
          ctx.duration && [`${ ( ( node.data.api.settingService || {} ).serviceDescriptionDuration || {} )[currentLang] || '' }: `, ctx.duration],
          ctx.time && [`${ ( ( node.data.api.settingService || {} ).serviceDescriptionTime || {} )[currentLang] || '' }: `, ctx.time],
          ( ctx.fromPoint || [] ).length > 0 && [`${ ( ( node.data.api.settingService || {} ).serviceDescriptionFromPoint || {} )[currentLang] || '' }: `,
            ctx.fromPoint.map( ( item, index ) =>
              [
                {
                  block: 'link',
                  content: item.title[node.currentLang],
                  target: '_blank',
                  url: item.coords ? `https://www.google.com/maps/search/?api=1&query=${ item.coords.lat },${ item.coords.lng }` : '',
                  mods: item.coords ? { pseudo: false } : { pseudo: true }
                },
                ctx.fromPoint.length-1>index && {
                  block: 'text',
                  content: ', '
                }
              ]
            )],
          ctx.vehicle && [`${ ( ( node.data.api.settingService || {} ).serviceDescriptionVehicle || {} )[currentLang] || '' }: `, ctx.vehicle],
          ctx.excursion.length > 0 && ctx.excursion && [`${ ( ( node.data.api.settingService || {} ).serviceDescriptionExcursion || {} )[currentLang] || '' }: `, ctx.excursion.map( lang => (
            {
              block: 'popup-tip',
              mods: { view: 'icon' },
              text: lang.name[node.currentLang] || '',
              title: {
                block: 'image',
                mods: { view: 'icon' },
                url: lang.url,
                alt: lang.name[node.currentLang] || '',
                title: lang.name[node.currentLang] || ''
              }
            } ) )],
          ctx.placeFeatures && [`${ ( ( node.data.api.settingService || {} ).serviceDescriptionPlaceFeatures || {} )[currentLang] || '' }: `, ctx.placeFeatures.map( placeFeature => ( {
            block: 'popup-tip',
            mods: { view: 'icon' },
            text: placeFeature.name[node.currentLang] || '',
            title: {
              block: 'image',
              mods: { view: 'colored-icon' },
              url: placeFeature.url,
              alt: placeFeature.name[node.currentLang] || '',
              title: placeFeature.name[node.currentLang] || ''
            }
          } ) )],
          ctx.routeMap && [
            {
              block: 'link',
              url: '#map',
              content: ( ( node.data.api.settingService || {} ).serviceDescriptionRouteMap || {} )[currentLang] || ''
            }
          ]
        ].map( item => item && {
          elem: 'item',
          content: [
            {
              block: 'text',
              mods: { weight: 'bold' },
              content: item[0]
            },
            typeof item[1] === 'string' || item[1] instanceof String ?
              { html: node._marked( item[1] || '' ) } :
              item[1] || ''
          ]
        } )
      }
    ]
  } )
);
