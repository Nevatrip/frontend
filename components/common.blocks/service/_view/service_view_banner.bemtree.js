block('service').mod('view', 'banner')(
  content()(( node, { service } ) => {

    const currentLang = node.data.params.lang;

    const {
      titleImage,
      title,
      key,
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
        alt: title[currentLang] || '',
        title: title[currentLang] || '',
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
                      service: key.current
                    },
                    title: title[currentLang],
                    content: title[currentLang],
                  }
                ]
              },
              features && {
                block: 'list',
                mods: {type: 'check-in-disk ', size: 'xl'},
                items: features.split('\n').map( item => {
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
                    title: title[currentLang],
                    route: 'service',
                    params: {
                      category: category.key.current,
                      service: key.current
                    },
                  },
                  {
                    block: 'service',
                    elem: 'more',
                    route: 'service',
                    params: {
                      category: category.key.current,
                      service: key.current
                    },
                    title: title[currentLang],
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
