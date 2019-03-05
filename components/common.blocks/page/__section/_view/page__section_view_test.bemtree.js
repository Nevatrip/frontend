block( 'page' ).elem( 'section' ).elemMod( 'view', 'test' )
  .content()( [
    {
      elem: 'layout',
      elemMods: { width: 'tiny' },
      content: 'I\'m test'
    }
  ] );
