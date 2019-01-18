block('service').mod('view', 'banner')(
  content()(( node, { service } ) => {

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
        alt: title,
        title: title,
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
                    url: category.key.current + '/' +  key.current,
                    title: title,
                    content: title,
                  }
                ]
              },
              features && {
                block: 'list',
                mods: {type: 'check-in-disk ', size: 'xl'},
                items: features.split('\n'),
              },
              {
                block: 'page',
                elem: 'row',
                elemMods: {view: 'service-banner'},
                content: [
                  {
                    block: 'service',
                    elem: 'buy',
                    content: {
                      price: price,
                      priceOutside: priceOld,
                      title: title,
                      urlBuy: category.key.current + '/' +  key.current + '#buy',
                    }
                  },
                  {
                    block: 'service',
                    elem: 'more',
                    url: category.key.current + '/' +  key.current,
                    title: title,
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
