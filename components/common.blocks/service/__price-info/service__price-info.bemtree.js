block('service').elem('price-info')(
  match(node => !node.ctx.discount[node.currentLang]).def()(''),
  content()((node, ctx) => {

    let infoArr =  ((ctx.discount || [])[node.currentLang]).split('||');
    let infoNewArr = [];


    for (let i = 0; i < infoArr.length; i++) {
      if (infoArr[i].startsWith('$')){
        var info = infoArr[i].slice(1, this.length);
        let settingArr = ((node.data.api.settingService || {}).popup).filter(key => key.popupAliasWrap.popupAlias===info);


        info = {
          block: 'popup-tip',
          title: ((settingArr || [])[0].popupTitle || {})[node.currentLang],
          text: ((settingArr || [])[0].popupContent || {})[node.currentLang]
        };
      } else {
        var info = infoArr[i];
      }
      infoNewArr.push(info);
    }

    return [
      ctx.discount[node.currentLang] && {
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
