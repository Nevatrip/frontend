block( 'service' ).elem( 'price-outside' )(
  content()( ( node, ctx ) => {
    const servicePriceOutside = ( ( node.data.api.settingService || {} ).servicePriceOutside || {} )[node.currentLang].toLowerCase() || '';
    const price = ( ctx.content || {} )[node.currentLang] || ( ctx.content || {} ).ru || '';

    return price && {
      html: price.match( /\d{2,6}/ ) ? `${ price }&nbsp;₽ ${ servicePriceOutside }` : `${ price }&nbsp;${ servicePriceOutside }`
    }
  } )
);
