const imageUrlBuilder = require( '@sanity/image-url' );
const marked = require( 'marked' );

block( 'root' ).replace()( ( node, ctx ) => {
  const doctype = ( ( ctx || {} ).data || {} ).doctype || 'html5';

  const builder = imageUrlBuilder(
    {
      projectId: process.env[`API_ID_${ ctx.data.params.project.toUpperCase() }`],
      dataset: process.env[`API_DATASET_${ ctx.data.params.project.toUpperCase() }`]
    }
  );

  const level = ctx.level || 'desktop';

  const config = node.config = ctx.config;//used on the others pages do not remove
  const data = node.data = ctx.data;
  const serviceBasedData = ( ( node.data || {} ).api || {} ).serviceBasedData;
  const currentLang = ( ( node.data || {} ).params || {} ).lang;

  node._marked = marked;
  node._urlFor = source => builder.image( source );

  node._contacts = {
    tel: ( serviceBasedData || {} ).tel || '',
    email: ( serviceBasedData || {} ).email || ''
  };

  const meta = ( ( node.data || {} ).api || {} ).meta || {};

  // const og = meta.og || {};

  if( ctx.context ) return ctx.context;

  if( doctype === 'xml' ) {
    if( ctx.context ) return ctx.context;
    const sitemapArr = node.data.api.sitemapArr;

    return [
      {
        block: 'urlset',
        content: sitemapArr.map( page => [
          page.to && {
            elem: 'url',
            content: [
              {
                elem: 'loc',
                content: node.data.api.site + ( ( node.data || {} ).params || {} ).urlTo( page.to || 'index', page.params || {
                  project: ( ( node.data || {} ).params || {} ).project || '',
                  lang: ( ( node.data || {} ).params || {} ).lang || ''
                } )
              }
            ]
          }
        ] )
      }
    ]
  }

  if( doctype === 'txt' ) {
    return node.data.content
  }

  return {
    block: 'page',
    title: meta.title ? meta.title : ( ( serviceBasedData || {} ).title || {} )[currentLang],
    favicon: '/favicon.ico',
    itemtype: 'http://schema.org/LocalBusiness',
    prefix: 'og: http://ogp.me/ns#',
    lang: currentLang,

    styles: { elem: 'css', url: `/assets/css/${ data.page }.${ data.params.project }-${ level }.min.css` },
    scripts: { elem: 'js', url: `/assets/js/${ data.page }.${ data.params.project }-${ level }.min.js` },
    head: [
      { elem: 'meta', attrs: { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge' } },
      { elem: 'meta', attrs: { name: 'viewport', content: 'width=device-width, initial-scale=1, shrink-to-fit=no' } },

      // favicons
      { elem: 'link', attrs: { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' } },
      { elem: 'link', attrs: { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' } },
      { elem: 'link', attrs: { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' } },
      { elem: 'link', attrs: { rel: 'manifest', href: '/manifest.json' } },
      { elem: 'link', attrs: { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#309acd' } },
      { elem: 'link', attrs: { rel: 'canonical', href: ctx.data.url.path } },
      { elem: 'meta', attrs: { name: 'msapplication-TileColor', content: '#309acd' } },
      { elem: 'meta', attrs: { name: 'theme-color', content: '#309acd' } },

      // meta

      ( meta || {} ).description && { elem: 'meta', attrs: { name: 'description', content: meta.description } },
      ( meta || {} ).type && { elem: 'meta', attrs: { property: 'og:type', content: meta.type } },
      ( meta || {} ).url && { elem: 'meta', attrs: { property: 'og:url', content: meta.url } },
      ( meta || {} ).title && { elem: 'meta', attrs: { property: 'og:title', content: meta.title } },
      ( meta || {} ).description && { elem: 'meta', attrs: { property: 'og:description', content: meta.description } },
      ( meta || {} ).image && { elem: 'link', attrs: { rel: 'image_src', href: meta.image } },
      ( meta || {} ).image && { elem: 'meta', attrs: { property: 'og:image', content: meta.image } },
      ( meta || {} ).width && { elem: 'meta', attrs: { property: 'og:image:width', content: meta.width } },
      ( meta || {} ).height && { elem: 'meta', attrs: { property: 'og:image:height', content: meta.height } },
      ( meta || {} ).title && { elem: 'meta', attrs: { property: 'twitter:title', content: meta.title } },
      ( meta || {} ).description && { elem: 'meta', attrs: { property: 'twitter:description', content: meta.description } },
      ( meta || {} ).url && { elem: 'meta', attrs: { property: 'twitter:url', content: meta.url } },
      ( meta || {} ).card && { elem: 'meta', attrs: { property: 'twitter:card', content: meta.card } },
      ( meta || {} ).image && { elem: 'meta', attrs: { property: 'twitter:image:src', content: meta.image } },
      ( ( serviceBasedData || {} ).title || {} )[currentLang] && { elem: 'meta', attrs: { name: 'apple-mobile-web-app-title', content: serviceBasedData.title[currentLang] } },
      ( ( serviceBasedData || {} ).title || {} )[currentLang] && { elem: 'meta', attrs: { name: 'application-name', content: serviceBasedData.title[currentLang] } },
      ( ( serviceBasedData || {} ).title || {} )[currentLang] && { elem: 'meta', attrs: { property: 'og:site_name', content: serviceBasedData.title[currentLang] } },
      ( ( serviceBasedData || {} ).Country || {} )[currentLang] && { elem: 'meta', attrs: { property: 'og:locale', content: `${ currentLang }_${ serviceBasedData.Country[currentLang] }` } }

    ]

    // mods: { route: node.data.view || node.data.page, js: true }
  };
} );
