const imageUrlBuilder = require( '@sanity/image-url' );
const marked = require( 'marked' );


block( 'root' ).replace()( ( node, ctx ) => {
  const builder = imageUrlBuilder(
    {
      projectId: process.env[`API_ID_${ ctx.data.params.project.toUpperCase() }`],
      dataset: process.env[`API_DATASET_${ ctx.data.params.project.toUpperCase() }`]
    }
  );

  const level = ctx.level || 'desktop';
  const config = node.config = ctx.config;
  const data = node.data = ctx.data;
  const serviceBasedData = node.data.api.serviceBasedData;
  const currentLang = node.data.params.lang;

  node._marked = marked;
  node._urlFor = source => builder.image( source );

  node._contacts = {
    tel: serviceBasedData.tel || '',
    email: serviceBasedData.email || ''
  };

  // const meta = data.meta || {};
  // const og = meta.og || {};

  if( ctx.context ) return ctx.context;

  return {
    block: 'page',
    title: data.title || config.appName,
    favicon: '/favicon.ico',
    itemtype: 'http://schema.org/LocalBusiness',
    prefix: 'og: http://ogp.me/ns#',
    lang: currentLang,

    styles: { elem: 'css', url: `/assets/css/${ data.page }.${ data.params.project }-${ level }.min.css` },
    scripts: { elem: 'js', url: `/assets/js/${ data.page }.${ data.params.project }-${ level }.min.js` },
    head: [
      // { elem: 'meta', attrs: { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge' } },
      // { elem: 'meta', attrs: { name: 'viewport', content: 'width=device-width, initial-scale=1, shrink-to-fit=no' } },

      // favicons
      // { elem: 'link', attrs: { rel: 'apple-touch-icon', sizes: '180x180', href:'/apple-touch-icon.png' } },
      // { elem: 'link', attrs: { rel: 'icon', type: 'image/png', sizes: '32x32', href:'/favicon-32x32.png' } },
      // { elem: 'link', attrs: { rel: 'icon', type: 'image/png', sizes: '16x16', href:'/favicon-16x16.png' } },
      // { elem: 'link', attrs: { rel: 'manifest', href: '/manifest.json' } },
      // { elem: 'link', attrs: { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color:'#309acd' } },
      // { elem: 'meta', attrs: { name: 'msapplication-TileColor', content: '#309acd' } },
      // { elem: 'meta', attrs: { name: 'theme-color', content: '#309acd' } },

      // meta
      // { elem: 'meta', attrs: { name: 'apple-mobile-web-app-title', content: 'name' } },
      // { elem: 'meta', attrs: { name: 'application-name', content: config.appName } },
      // { elem: 'meta', attrs: { name: 'description', content: meta.description } },
      // { elem: 'meta', attrs: { property: 'og:title', content: og.title || data.title || config.appName } },
      // { elem: 'meta', attrs: { property: 'og:description', content: meta.description } },
      // { elem: 'meta', attrs: { property: 'og:url', content: og.url || data.url.pathname } },
      // { elem: 'meta', attrs: { property: 'og:image', content: og.image } },
      // { elem: 'meta', attrs: { property: 'og:image:width', content: "279" } },
      // { elem: 'meta', attrs: { property: 'og:image:height', content: "279" } },
      // { elem: 'meta', attrs: { property: 'og:site_name', content: config.appName } },
      // { elem: 'meta', attrs: { property: 'og:locale', content: 'ru_RU' } }, //TODO add lang
      // { elem: 'meta', attrs: { property: 'og:type', content: 'website' } }

    ]

    // mods: { route: node.data.view || node.data.page, js: true }
  };
} );
