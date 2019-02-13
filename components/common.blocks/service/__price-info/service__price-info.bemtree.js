block('service').elem('price-info')(
  content()((node, ctx) => {
    let infoArr = (ctx.discount).split('||');
    let infoNewArr = [];

    for (let i = 0; i < infoArr.length; i++) {
      if (infoArr[i].startsWith('$')){
        var info = infoArr[i].slice(1, this.length);
        switch (info) {
          case 'иностранный':
            info = {
              block: 'popup-tip',
              title: 'иностранный',
              text: 'Не резиденты РФ'
            };
            break;
          case 'льготный':
            info = {
              block: 'popup-tip',
              title: 'льготный',
              text: 'Школьники, пенсионеры, инвалиды. Необходимо предъявить подтверждающие документы в кассе.'
            };
            break;
          case 'детский':
            info = {
              block: 'popup-tip',
              title: 'детский',
              text: 'Дети 3-12 лет или 5-12 лет (см. конкр.экск.). До 3 или 5 - бесплатно без представления отдельного места. Необходимо предъявить подтверждающие документы в кассе.'
            };
            break;
          case 'детский3':
            info = {
              block: 'popup-tip',
              title: 'детский',
              text: 'Дети 3-12 лет. До 3 - бесплатно без представления отдельного места. Необходимо предъявить подтверждающие документы в кассе.'
            };
            break;
          case 'детский5':
            info = {
              block: 'popup-tip',
              title: 'детский',
              text: 'Дети 5-12 лет. До 5 - бесплатно без представления отдельного места. Необходимо предъявить подтверждающие документы в кассе.'
            };
            break;
        }
      } else {
        var info = infoArr[i];
      }
      infoNewArr.push(info);
    }

    return [
      {
        block: 'list',
        mods: {type: 'disk', size: 'md'},
        content: [
          (infoNewArr.length>0 && infoNewArr[0].length>0) ? [((((node.data.api.settingService || {}).servicePriceInfo || {})[node.currentLang] || '')+ ': '), infoNewArr] : false,
          ctx.prevention && ['', ctx.prevention],
        ].map(item => (item && {
          elem: 'item',
          content: [
            {
              block: 'text',
              mods: { weight: 'bold' },
              content: item[0]
            },
            item[1] || ''
          ]
        } ) ),
      },
    ]
  })
);
