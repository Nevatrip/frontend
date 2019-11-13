block( 'filter' ).elem( 'header' )(
  replace()( ( { block, elem, currentLang, _bg, _basicHeading, _dayHeading }, ctx ) => ( {
    block: 'form',
    mods: { view: 'filter' },
    mix: { block, elem },
    content: [
      {
        elem: 'header',
        mix: { block, elem: 'header-top' },
        content: [
          {
            block: 'image',
            mods: { view: 'bg' },
            url: _bg,
            alt: 'Фильтр'
          },
          {
            elem: 'content',
            mix: [
              { block, elem: 'content' },
              { block: 'page', elem: 'content' }
            ],
            content: [
              {
                block: 'heading',
                mods: { size: 'xl' },
                mix: { block, elem: 'heading' },
                content: _dayHeading
              },
              {
                block: 'heading',
                mods: { size: 'xl' },
                mix: { block, elem: 'heading' },
                content: _basicHeading
              },
              {
                block: 'form-field',
                mods: {
                  type: 'checkbox-group'
                },
                name: 'tags',
                content: {
                  block: 'checkbox-group',
                  mix: { block, elem: 'basic-tags' },
                  mods: { type: 'button' },
                  options: ctx.basicTags ?
                    ctx.basicTags.filter( item => item.title[currentLang] ).map( item => (
                      {
                        val: item.key.current,
                        title: ( item.subTitle || {} )[currentLang] || '',
                        text: { html: item.title[currentLang] || '' }
                      }
                    ) ) :
                    ''
                }
              }
            ]
          }
        ]
      }
    ]
  } ) ),
);
