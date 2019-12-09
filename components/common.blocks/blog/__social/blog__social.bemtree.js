block( 'blog' ).elem( 'social' )(
  content()( ( node, ctx ) => [
    ctx.settingSocials && ctx.settingSocials.map( item => ( {
      block: 'link',
      url: item.url,
      title: item.name,
      target: '_blank',
      mix: { block: 'blog', elem: 'social-link' },
      content: {
        block: 'image',
        url: item.img,
        alt: item.name,
        mix: { block: 'blog', elem: 'social-image' }
      }
    } ) )
  ] )
);
