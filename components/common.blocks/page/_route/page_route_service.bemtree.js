block( 'page' ).mod( 'route', 'service' )(
  mods()( node => {
    const currentLang = node.data.params.lang;
    const service = node.data.api.service;
    const serviceBasedData = node.data.api.serviceBasedData;

    return [
      {
        block: 'schema',
        mods: { type: 'product' },
        name: ( ( ( service || {} ).title || {} )[currentLang] || {} ).name || '',
        description: ( ( service || {} ).descriptionMeta || {} )[currentLang] || '',
        image: service.titleImage || '',
        price: service.price || '',
        priceCurrency: serviceBasedData.priceCurrency || '' //Валюта (в 3-х буквенном формате ISO 4217 ) цены предложения. ( RUB, EUR, ... )
      },
      {
        block: 'service',
        mods: { view: 'detail' },
        service
      }
    ]
  } ),
);
