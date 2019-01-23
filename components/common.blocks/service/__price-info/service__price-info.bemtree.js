block('service').elem('price-info')(
  content()((node, ctx) => {

    // let discountArr = ctx.discount.split('[[').split(']]');

    // console.log('↓↓_↓↓_↓↓_↓↓_↓↓_↓↓_↓↓_↓↓_↓↓_↓↓_↓↓_↓↓_↓↓_↓↓_↓↓');
    // console.log(discountArr);
    // console.log('↑↑_↑↑_↑↑_↑↑_↑↑_↑↑_↑↑_↑↑_↑↑_↑↑_↑↑_↑↑_↑↑_↑↑_↑↑_');

    // for (let i = 0; i < discountArr.length; i++){
    //   switch (discountArr[i]) {
    //     case '$льготный':
    //       return 1;
    //       break;
    //     case '$детский':
    //       return 2;
    //       break;
    //   }
    // }
    
    return [
      {
        block: 'list',
        mods: {type: 'disk', size: 'md'},
        items: [
          [
            'Скидка: ',
            ctx.discount
          ],
          ['', 'Пассажиры до 18 лет допускаются на борт в присутствии старших сопровождающих.'],
        ].map( item => ( {
          content: {
            html: '<b>' + item[0] + '</b>' + (item[1]?item[1]:'')
          }
        } ) ),
      },
      {
        block: 'test',
      },
    ]
  })
);
