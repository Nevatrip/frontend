const path = require( 'path' );

const decache = require( 'decache' );
const MobileDetect = require( 'mobile-detect' );

const config = require( './config' );

const useCache = config.cacheTTL > 0;

let cache = {};

function evalFile( filename ) {
  decache( filename );

  // Fixes memory leak
  // clean module from links to previous parsed files
  module.children = module.children.filter( item => item.id !== filename );

  // eslint-disable-next-line
  return require( filename );
}

function getTemplates( project = 'nevatrip', bundleName = 'index', level, lang ) {
  const pathToBundle = path.resolve( 'bundles', `${ bundleName }.${ project }-${ level }` );

  return {
    BEMTREE: evalFile( path.resolve( pathToBundle, `${ bundleName }.${ project }-${ level }.${ lang }.bemtree.js` ) ).BEMTREE,
    BEMHTML: evalFile( path.resolve( pathToBundle, `${ bundleName }.${ project }-${ level }.${ lang }.bemhtml.js` ) ).BEMHTML
  };
}

const render = ( req, res, data = {}, context ) => {
  if( config.__DEV__ && req.query.json || req.xhr ) {
    return res.json( data );
  }

  const user =/* req.isAuthenticated() ? req.user : */false;
  const cacheKey = req.originalUrl + ( context ? JSON.stringify( context ) : '' ) + ( user ? JSON.stringify( user ) : '' );

  const cached = cache[cacheKey];

  if(
    useCache &&
    cached &&
    new Date() - cached.timestamp < config.cacheTTL &&
    !req.query.dropCache
  ) {
    return res.send( cached.html );
  }

  const md = new MobileDetect( req.headers['user-agent'] );
  const level = md.mobile() || md.tablet() ? 'touch' : 'desktop';

  const bemtreeCtx = {
    level,
    block: 'root',
    project: data.params.project || 'nevatrip',
    lang: data.params.lang,
    config,
    data: {
      ...data,

      // user,
      url: req._parsedUrl,
      session: req.session.id
    }
  };


  const templates = getTemplates( data.params.project, data.page, level, data.params.lang );

  let bemjson;

  try {
    // eslint-disable-next-line prefer-reflect
    bemjson = templates.BEMTREE.apply( bemtreeCtx );
  } catch( err ) {
    console.error( 'BEMTREE error', err.stack );
    console.trace( 'server stack' );
    return res.sendStatus( 500 );
  }

  if( config.__DEV__ && req.query.bemjson ) {
    return res.json( bemjson );
  }

  let html;

  try {
    // eslint-disable-next-line prefer-reflect
    html = templates.BEMHTML.apply( bemjson );
  } catch( err ) {
    console.error( 'BEMHTML error', err.stack );
    return res.sendStatus( 500 );
  }

  useCache &&
    ( cache[cacheKey] = {
      timestamp: new Date(),
      html
    } );

  return html;
};

function dropCache() {
  cache = {};
}

module.exports = {
  render,
  dropCache
};
