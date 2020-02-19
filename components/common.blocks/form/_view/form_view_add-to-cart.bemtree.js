block( 'form' ).mod( 'view', 'add-to-cart' )( {
  extend: {
    'ctx.action': '/cart',
    'ctx.method': 'post'
  },
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
