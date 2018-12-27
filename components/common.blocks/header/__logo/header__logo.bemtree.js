block('header').elem('logo')(
  replace() (( node, ctx )=>{
    return {
      block: 'logo'
    }
  }),
);
