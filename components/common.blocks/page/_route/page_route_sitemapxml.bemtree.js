block( 'page' ).mod( 'route', 'sitemapxml' )(
  replace()( node => {
    console.log( '∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞' );
    console.log( 'sitemap' );

    console.log( 'ˆˆˆˆˆˆˆˆˆˆˆˆˆˆˆˆˆˆˆˆˆˆˆˆˆˆˆˆˆˆˆˆˆˆˆˆˆˆˆˆ' );

    const sitemapArr = node.data.api.sitemapArr;

    return sitemapArr.map( page => [
      {
        block: 'list',
        elem: 'item',
        content: {
          block: 'link',
          to: page.to,
          params: page.params,
          title: page.title,
          content: [
            page.title,
            page.inner && {
              block: 'list',
              mods: {
                type: 'disk',
                size: 'md'
              },
              content: page.inner.map( inner => [
                {
                  block: 'list',
                  elem: 'item',
                  content: {
                    block: 'link',
                    to: inner.to,
                    params: inner.params,
                    title: inner.title,
                    content: inner.title
                  }
                }
              ] )
            }
          ]
        }
      }
    ] )
  } ),
);
