block( 'filter' ).elem( 'neighbors' )(
  content()( ( node, ctx ) => {
    const neighborPrev = 'Метеоры в пригороды';
    const neighborPrevUrl = 'meteors';
    const neighborNext = 'дневные экскурсии';
    const neighborNextUrl = 'day';

    return [
      {
        block: 'page',
        elem: 'row',
        content: [
          typeof neighborPrev !== 'undefined'&&typeof neighborPrevUrl !== 'undefined'&&{
            block: 'link',
            content: { html: `<b>&larr;&nbsp;Все&nbsp;${ neighborPrev }</b>` },
            title: `Все ${ neighborPrev }`,
            to: 'servicesByCategory',
            params: {
              category: neighborPrevUrl
            }
          },
          typeof neighborNext !== 'undefined'&&typeof neighborNextUrl !== 'undefined'&&{
            block: 'link',
            content: { html: `<b>Все&nbsp;${ neighborNext }&nbsp;&rarr;` + '</b>' },
            title: `Все ${ neighborNext }`,
            to: 'servicesByCategory',
            params: {
              category: neighborNextUrl
            }
          }
        ]
      }
    ]
  } )
);
