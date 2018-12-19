block( 'root' ).replace()( ( node, ctx ) => {

  const level = ctx.level || 'desktop';
  const config = node.config = ctx.config;
  const data = node.data = ctx.data;
  const meta = data.meta || {};
  const og = meta.og || {};

  if ( ctx.context ) return ctx.context;

  return {
    block: 'page',
    title: data.title || config.appName,
    favicon: '/favicon.ico',
    styles: { elem: 'css', url: `/assets/css/${ level }.min.css` },
    scripts: { elem: 'js', url: `/assets/js/${ level }.min.js` },
    head: [
      { elem: 'meta', attrs: { name: 'viewport', content: 'width=device-width, initial-scale=1' } },

      // favicons
      { elem: 'link', attrs: { rel: 'apple-touch-icon', sizes: '180x180', href:'/apple-touch-icon.png' } },
      { elem: 'link', attrs: { rel: 'icon', type: 'image/png', sizes: '32x32', href:'/favicon-32x32.png' } },
      { elem: 'link', attrs: { rel: 'icon', type: 'image/png', sizes: '16x16', href:'/favicon-16x16.png' } },
      { elem: 'link', attrs: { rel: 'manifest', href: '/manifest.json' } },
      { elem: 'link', attrs: { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color:'#f3203c' } },
      { elem: 'meta', attrs: { name: 'theme-color', content: '#f3203c' } },

      // meta
      { elem: 'meta', attrs: { name: 'apple-mobile-web-app-title', content: 'name' } },
      { elem: 'meta', attrs: { name: 'application-name', content: config.appName } },
      { elem: 'meta', attrs: { name: 'description', content: meta.description } },
      { elem: 'meta', attrs: { property: 'og:title', content: og.title || data.title || config.appName } },
      { elem: 'meta', attrs: { property: 'og:url', content: og.url || data.url.pathname } },
      { elem: 'meta', attrs: { property: 'og:image', content: og.image } },
      { elem: 'meta', attrs: { property: 'og:site_name', content: config.appName } },
      { elem: 'meta', attrs: { property: 'og:locale', content: 'ru_RU' } },
      { elem: 'meta', attrs: { property: 'og:type', content: 'website' } }
    ],
    mods: { view: data.view }
  };
} );
