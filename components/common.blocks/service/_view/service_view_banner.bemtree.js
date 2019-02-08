block('service').mod('view', 'banner')(
  content()(( node, { service } ) => {

    const currentLang = node.data.params.lang;

    const {
      titleImage,
      title,
      features,
      price,
      priceOld,
      category
    } = service;

    return [
      {
        block: 'image',
        mods: {view: 'bg'},
        url: titleImage || '',
        alt: title[currentLang].name || '',
        title: title[currentLang].name || '',
      },
      {
        elem: 'content',
        mix: {block: 'page', elem: 'content'},
        content: [
          {
            elem: 'blank',
            content: [
              title && {
                block: 'heading',
                mods: {size: 'l'},
                mix: {block: 'service', elem: 'title', elemMods: {view: 'md'},},
                content: [
                  {
                    block: 'link',
                    mods: {view: 'inherit'},
                    to: 'service',
                    params: {
                      category: category.key.current,
                      service: title[currentLang].key.current || ''
                    },
                    title: title[currentLang].name,
                    content: title[currentLang].name,
                  }
                ]
              },
              features && features[currentLang] && {
                block: 'list',
                mods: {type: 'check-in-disk ', size: 'xl'},
                items: features[currentLang].split('\n').map( item => {
                  return {
                    html: marked(item)
                  }
                }),
              },
              {
                block: 'page',
                elem: 'row',
                elemMods: {view: 'service-banner'},
                content: [
                  {
                    block: 'service',
                    elem: 'buy',
                    price: price,
                    priceOutside: priceOld,
                    title: title[currentLang].name,
                    route: 'service',
                    params: {
                      category: category.key.current,
                      service: title[currentLang].key.current || ''
                    },
                  },
                  {
                    block: 'service',
                    elem: 'more',
                    route: 'service',
                    params: {
                      category: category.key.current,
                      service: title[currentLang].key.current || ''
                    },
                    title: title[currentLang].name,
                  },
                ]
              },
            ]
          }
        ],
      }
    ]
  }),
);
