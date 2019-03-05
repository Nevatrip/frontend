block( 'footer' ).elem( 'heading' )(
  replace()( node => [
    {
      block: 'heading',
      mods: { size: 'xl' },
      mix: { block: node.block, elem: node.elem },
      content: { html: node._mainNavHeading }
    }
  ] )
);
