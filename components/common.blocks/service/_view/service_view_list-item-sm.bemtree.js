block('service').mod('view', 'list-item-sm')(
  content()((node, {service}) => {

    const currentLang = node.data.params.lang;

    const {
      key,
      titleImage,
      title,
      category
    } = service;

    let titleImageCropped = '';

    if (titleImage){
      if (titleImage.hotspot) {
        titleImageCropped = urlFor(titleImage)
          .focalPoint(titleImage.hotspot.x.toFixed(2), titleImage.hotspot.y.toFixed(2))
          .fit('crop')
          .width(286)
          .height(153)
          .url();
      } else if (titleImage) {
        titleImageCropped = urlFor(titleImage)
          .fit('crop')
          .width(286)
          .height(153)
          .url();
      }
    }

    return [
      {
        block: 'link',
        mods: {display: 'block', view: 'inherit'},
        to: 'service',
        params: {
          category: category.key.current,
          service: key.current
        },
        title: title[currentLang] || '',
        content: [
          {
            block: 'image',
            mix: {block: 'service', elem: 'image'},
            url: titleImageCropped,
            title: title[currentLang] || '',
            alt: title[currentLang] || ''
          },
          {
            block: 'heading',
            mods: {size: 'm'},
            content: title[currentLang] || ''
          }
        ]
      }
    ]
  }),
);
