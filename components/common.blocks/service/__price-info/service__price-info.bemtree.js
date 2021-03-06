block( 'service' ).elem( 'price-info' )(
  content()( ( node, ctx ) => {
    const currentLang = ctx.lang;
    const infoArr = ( ctx.discount || [] )[currentLang] ? ctx.discount[currentLang].split( '||' ) : [];
    const infoNewArr = [];

    for( let i = 0; i < infoArr.length; i++ ) {
      let info;

      if( infoArr[i].startsWith( '$' ) ) {
        const infoString = infoArr[i].slice( 1, this.length ) || '';
        const settingArr = ( ( node.data.api.settingService || {} ).popup || {} ).key ?
          ( ( node.data.api.settingService || {} ).popup || {} ).filter( key => key.popupAliasWrap.popupAlias===infoString ) :
          '';

        info = {
          block: 'popup-tip',
          title: ( ( ( settingArr || [] )[0] || [] ).popupTitle || {} )[currentLang] || infoString,
          text: ( ( ( settingArr || [] )[0] || [] ).popupContent || {} )[currentLang] || infoString
        };
      } else {
        info = infoArr[i];
      }
      infoNewArr.push( info );
    }

    return [
      ctx.discount[currentLang] && {
        block: 'list',
        mods: { type: 'disk', size: 'md' },
        content: [
          ctx.pricesDescription && ['', { html: node._marked( ctx.pricesDescription ) }],
          infoNewArr.length>0 && infoNewArr[0].length>0 ? [`${ ( ( node.data.api.settingService || {} ).servicePriceInfo || {} )[currentLang] || '' }: `, infoNewArr] : false,
          ctx.prevention && ['', { html: node._marked( ctx.prevention ) }]
        ].map( item => item && {
          elem: 'item',
          content: [
            {
              block: 'text',
              mods: { weight: 'bold' },
              content: item[0]
            },
            item[1] || ''
          ]
        } )
      }
    ]
  } )
);
