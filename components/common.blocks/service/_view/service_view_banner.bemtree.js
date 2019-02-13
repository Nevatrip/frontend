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

    const linkParamsService = ((title[currentLang] || {}).key || {}).current || '//';
    const linkParamsCategory = (((category || {}).title || {})[currentLang] || {}).key.current || '//';
    const serviceTitle = (title[currentLang] || {}).name || '';

    if (linkParamsService !== '//'){
      return [
        {
          block: 'image',
          mods: {view: 'bg'},
          url: titleImage || '',
          alt: serviceTitle,
          title: serviceTitle,
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
                        category: linkParamsCategory,
                        service: linkParamsService
                      },
                      title: serviceTitle,
                      content: serviceTitle,
                    }
                  ]
                },
                (features || {})[currentLang] && {
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
                      title: serviceTitle,
                      route: 'service',
                      params: {
                        category: linkParamsCategory,
                        service: linkParamsService
                      },
                    },
                    {
                      block: 'service',
                      elem: 'more',
                      route: 'service',
                      params: {
                        category: linkParamsCategory,
                        service: linkParamsService
                      },
                      title: serviceTitle,
                    },
                  ]
                },
              ]
            }
          ],
        }
      ]
    }
  }),
);
