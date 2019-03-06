block( 'page' ).mod( 'route', 'service' )(
  mods()( node => [
    {
      block: 'service',
      mods: { view: 'detail' },
      service: node.data.api.service
    }
  ] ),
);
