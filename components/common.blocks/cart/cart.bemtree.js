const fs = require( 'fs' );

// const runtimeMain = fs.readFileSync( './static/assets/cart/static/js/runtime-main.js' ).toString();

block( 'page' ).content()( () => [
  applyNext(),
  { elem: 'css', url: '/assets/cart/static/css/2.chunk.css' },
  { elem: 'css', url: '/assets/cart/static/css/main.chunk.css' },
  // { elem: 'js', content: runtimeMain },
  { elem: 'js', url: '/assets/cart/static/js/runtime-main.js' },
  { elem: 'js', url: '/assets/cart/static/js/2.chunk.js' },
  { elem: 'js', url: '/assets/cart/static/js/main.chunk.js' }
] );

