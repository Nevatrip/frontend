block('filter').elem('neighbors')(
  content()((node, ctx) => {

    let neighborPrev = 'Метеоры в пригороды';
    let neighborPrevUrl = 'meteors';
    let neighborNext = 'дневные экскурсии';
    let neighborNextUrl = 'day';

    return [
      {
        block: 'page',
        elem: 'row',
        content: [
          (typeof neighborPrev !== "undefined")&&(typeof neighborPrevUrl !== "undefined")&&{
            block: 'link',
            content: {html: '<b>&larr;&nbsp;Все&nbsp;' + neighborPrev + '</b>'},
            title: 'Все ' + neighborPrev,
            url: '/' + neighborPrevUrl,
          },
          (typeof neighborNext !== "undefined")&&(typeof neighborNextUrl !== "undefined")&&{
            block: 'link',
            content: {html: '<b>Все&nbsp;' + neighborNext + '&nbsp;&rarr;' + '</b>'},
            title: 'Все ' + neighborNext,
            url: '/' + neighborNextUrl,
          }
        ]
      }
    ]
  })
);
