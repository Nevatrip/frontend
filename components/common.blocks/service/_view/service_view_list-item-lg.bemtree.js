block('service').mod('view', 'list-item-lg')(
  content()((node, {service}) => {

    const currentLang = node.data.params.lang;

    const {
      titleImage,
      title,
      features,
      price,
      priceOld,
      category
    } = service;

    let titleImageCropped = '';

    if (titleImage) {
      if (titleImage.hotspot) {
        titleImageCropped = urlFor(titleImage)
          .focalPoint(titleImage.hotspot.x.toFixed(2), titleImage.hotspot.y.toFixed(2))
          .fit('crop')
          .width(404)
          .height(277)
          .url();
      } else if (titleImage) {
        titleImageCropped = urlFor(titleImage)
          .fit('crop')
          .width(404)
          .height(277)
          .url();
      }
    }

    const linkParamsService = (title[currentLang] && title[currentLang].key && title[currentLang].key.current) ? title[currentLang].key.current : '//';
    const linkParamsCategory = (category && category.title && category.title[currentLang] && category.title[currentLang].key.current) ? category.title[currentLang].key.current : '//';
    const serviceTitle = (title[currentLang] && title[currentLang].name) ? title[currentLang].name : '';


    if (linkParamsService !== '//') {
      return [
        {
          elem: 'content',
          content: [
            {
              block: 'page',
              elem: 'row',
              elemMods: {xs: 'column'},
              content: [
                {
                  block: 'service',
                  elem: 'image',
                  elemMods: {size: 'third'},
                  mix: {block: 'page', elem: 'col'},
                  content: [
                    {
                      block: 'link',
                      to: 'service',
                      params: {
                        category: linkParamsCategory,
                        service: linkParamsService
                      },
                      content: {
                        block: 'image',
                        mods: {view: 'bg'},
                        url: titleImageCropped || '',
                        alt: serviceTitle,
                        title: serviceTitle,
                      }
                    },
                  ]
                },
                {
                  block: 'service',
                  elem: 'aside-content',
                  mix: {block: 'page', elem: 'col'},
                  content: [
                    {
                      block: 'heading',
                      mods: {size: 'l'},
                      mix: {block: 'service', elem: 'title', elemMods: {view: 'sm'},},
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
                          content: serviceTitle
                        }
                      ]
                    },
                    features && features[currentLang] && {
                      block: 'list',
                      mods: {type: 'check', size: 'sm'},
                      items: features[currentLang].split('\n').map(item => {
                        return {
                          html: marked(item)
                        }
                      }),
                    },
                    {
                      block: 'page',
                      elem: 'row',
                      elemMods: {view: 'service-list-item-lg'},
                      content: [
                        price && {
                          block: 'service',
                          elem: 'price',
                          elemMods: {view: 'sm'},
                          content: price,
                        },
                        {
                          block: 'link',
                          mods: {view: 'button'},
                          content: {
                            html: ((node.data.api.settingService && node.data.api.settingService.serviceViewListItemLgMore && node.data.api.settingService.serviceViewListItemLgMore[currentLang]) ? node.data.api.settingService.serviceViewListItemLgMore[currentLang] : '') + '&nbsp;&rarr;'
                          },
                          to: 'service',
                          params: {
                            category: linkParamsCategory,
                            service: linkParamsService
                          },
                          title: serviceTitle,
                        },
                      ]
                    },
                    priceOld && {
                      block: 'service',
                      elem: 'price-outside',
                      content: priceOld,
                    }
                  ]
                },
              ],
            },
            {
              block: 'page',
              elem: 'row',
              content: [
                {
                  block: 'page',
                  elem: 'hr',
                  mods: {size: 'md'}
                },
              ]
            },
          ],
        }
      ]
    }
  }),
);
