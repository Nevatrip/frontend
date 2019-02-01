block('logo')(
  content()( (node, ctx) => {
    return[
      {
        elem: 'image',
        logo: ctx.logo,
        logoTitle: ctx.logoTitle,
      },
    ]
  })
);
