block( 'form' ).mod( 'view', 'add-to-cart' )( {
  extend: ( node, ctx ) => ( {
    'ctx.action': `/${ ctx.currentLang }/cart`,
    'ctx.method': 'get'
  } ),
  content: ( node, { id, session, title, content } ) => [
    {
      block: 'form-field',
      mods: { type: 'hidden' },
      name: 'session',
      val: session
    },
    {
      block: 'form-field',
      mods: { type: 'hidden' },
      name: 'product',
      val: id
    },
    {
      block: 'button',
      mods: { type: 'submit' },
      title: title || content,
      text: content
    }
  ]
} )
