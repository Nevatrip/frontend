block( 'service' ).elem( 'price-outside' )(
  content()( ( node, ctx ) => {
    const servicePriceOutside = ( ( ( ( ( node.data || {} ).api || {} ).settingService || {} ).servicePriceOutside || {} )[node.currentLang || ctx.currentLang] || ctx.servicePriceOutside || '' ).toLowerCase();
    const price = ( ctx.content || {} )[node.currentLang] || '';

    return price && {
      html: price.match( /\d{2,6}/ ) ? `${ price } ${ servicePriceOutside }` : `${ price }&nbsp;${ servicePriceOutside }`
    }
  } )
);
