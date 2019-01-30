block('service').elem('gallery').content()((node, ctx) => {
  const gallery = {};
  ctx.photos.forEach(galleryItem => {
    gallery[galleryItem.name] = gallery[galleryItem.name] || {};
    gallery[galleryItem.name][galleryItem.path] = galleryItem;
  });


  return [
    {
      block: 'list',
      mods: {type: 'gallery'},
      mix: {block: 'gallery', js: true},
      content: ctx.photos
        .map((item) => {
          return {
            block: 'gallery',
            elem: 'item',
            tag: 'figure',
            attrs: {
              'data-pswp-uid': '1',
              itemscope: true,
              itemprop: 'associatedMedia',
              itemtype: 'http://schema.org/ImageObject',
            },
            content: [
              {
                block: 'link',
                title: item.description,
                url: urlFor(item.asset._ref).url(),
                mods: {pseudo: true, display: 'block'},
                mix: {block: 'gallery', elem: 'link'},
                target: '_blank',
                attrs: {
                  itemprop: 'contentUrl',
                  'data-size': item.asset._ref.split('-')[2]
                },
                js: {
                  size: '1920x1280'
                },
                content: {
                  block: 'image',
                  url: urlFor(item.asset._ref).fit('crop').width(133).height(133).url(),
                  alt: item.description,
                  mods: {width: 'available'},
                  mix: {block: 'gallery', elem: 'thumbnail'},
                  attrs: {
                    itemprop: 'thumbnail'
                  },
                  title: item.description,
                }
              },
              {
                elem: 'description',
                mix: {block: 'visually-hidden'},
                tag: 'figcaption',
                attrs: {
                  itemprop: 'caption description'
                },
                content: item.description,
              }
            ]
          };
        })
    }
  ]
});
