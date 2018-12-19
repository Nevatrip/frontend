block( 'page' ).elem( 'section' ).elemMod( 'view', 'test' )
  .content()( node => [
    {
      elem: 'layout',
      elemMods: { width: 'tiny' },
      content: `I'm test`
    }
  ] );
