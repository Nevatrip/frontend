block( 'breadcrumbs' )(
  tag()( 'ol' ),
  attrs()( () => (
    {
      itemscope: '',
      itemtype: 'http://schema.org/BreadcrumbList'
    } )
  )
);
