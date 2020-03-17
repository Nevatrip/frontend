block( 'form' ).mod( 'view', 'add-to-cart' )( {
  extend: node => ( {
    'ctx.action': '/cart',
    'ctx.method': 'post',
    'ctx.api': node.config.api
  } ),
  content: ( node, { id, session, title, content, noDirectionBtn, fullSchedule } ) => [
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
      text: fullSchedule ? content : noDirectionBtn
    }
  ]
} )
