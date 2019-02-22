block('service').mod('view', 'list-item-sm')(
  content()((node, {service}) => {

    const currentLang = node.data.params.lang;

    const {
      titleImage,
      title,
      category
    } = service;

    let titleImageCropped = '';

    if (titleImage) {
      if (titleImage.hotspot) {
        titleImageCropped = urlFor(titleImage)
          .focalPoint(titleImage.hotspot.x.toFixed(2), titleImage.hotspot.y.toFixed(2))
          .fit('crop')
          .width(600)
          .height(153)
          .url();
      } else if (titleImage) {
        titleImageCropped = urlFor(titleImage)
          .fit('crop')
          .width(600)
          .height(153)
          .url();
      }
    }

    const linkParamsService = ((title[currentLang] || {}).key || {}).current || '//';
    const linkParamsCategory = (((category || {}).title || {})[currentLang] || {}).key.current || '//';
    const serviceTitle = (title[currentLang] || {}).name || '';

    if (linkParamsService !== '//') {
      return [
        {
          block: 'link',
          mods: {display: 'block', view: 'inherit'},
          to: 'service',
          params: {
            category: linkParamsCategory,
            service: linkParamsService
          },
          title: title[currentLang].name || '',
          content: [
            {
              block: 'image',
              mix: {block: 'service', elem: 'image'},
              url: titleImageCropped,
              title: serviceTitle,
              alt: serviceTitle
            },
            {
              block: 'heading',
              mods: {size: 'm'},
              content: serviceTitle
            }
          ]
        }
      ]
    }
  }),
);
