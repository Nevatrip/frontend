'use strict';

const fs = require( 'fs' );
const path = require( 'path' );

const app = require( 'express' )();
const PrettyError = require( 'pretty-error' );
const debugHTTP = require( 'debug-http' );
const bodyParser = require( 'body-parser' );

const config = require( './config' );
const router = require( './router' );
const render = require( './render' ).render;
const rebuild = require( './rebuild' );

const isSocket = isNaN( config.port );
const skip = ( req, res, next ) => next();

if( config.__DEV__ ) {
  debugHTTP();
}

/*
 * Server's middleware
 *
 *****************************************************************************/
app
  .disable( 'x-powered-by' )
  .enable( 'trust proxy' )
  .use( require( 'compression' )() ) // TODO: Add Brotli / Zopfli compression #2
  .use( '/livereload.js', config.__DEV__ ? require( 'tiny-lr' ).middleware( { app, dashboard: false } ) : skip )
  .use( require( 'serve-favicon' )( path.join( config.staticFolder, 'favicon.ico' ) ) )
  .use( require( 'serve-static' )( config.staticFolder ) )
  .use(
    config.__DEV__ ?
      require( 'express-pino-logger' )( {
        // TODO: Add viewer for logger #4
        level: config.logLevel
      } ) :
      skip,
  )
  .use( require( 'cookie-parser' )() )
  .use( bodyParser.urlencoded( { extended: false } ) )
  .use(
    require( 'express-session' )( {
      resave: true,
      saveUninitialized: true,
      secret: config.sessionSecret,
      cookie: { secure: true }
    } ),
  )
  .use( config.__DEV__ ? skip : require( 'connect-slashes' )() );

/*
 * Routing
 *
 *****************************************************************************/

app.all( '*', async( req, res, next ) => {
  try {
    console.time( 'Route' );
    const route = await router.resolve( {
      pathname: req.path,
      query: req.query || {},
      body: req.body,
      sessionID: req.sessionID
    } );

    console.timeEnd( 'Route' );

    route.redirect && res.redirect( route.status || 302, route.redirect );
    res.status( route.status || 200 );

    if( route.page ) {
      console.time( 'Render' );
      const html = await render( req, res, route );

      console.timeEnd( 'Render' );

      return res.send( html );
    }

    return res.json( route );
  } catch( error ) {
    // Prepare for error handler
    next( error );
  }
} );

/*
*/

/*
 * Error handler
 *
 *****************************************************************************/
const pe = new PrettyError();

pe.skipNodeFiles();
pe.skipPackage( 'express' );

app.use( ( err, req, res, next ) => {
  console.error( pe.render( err ) );
  res.status( err.status || 500 );

  // const html = render( req, res, {}, { page: 'error', api: { error: err } } );
  const html = '<h1>500</h1>';

  res.send( html );
  next();
} );

if( config.__DEV__ ) {
  rebuild( app );
}

/*
 * Start server
 *
 *****************************************************************************/
isSocket && fs.existsSync( config.port ) && fs.unlinkSync( config.port );
app.listen( config.port, function() {
  isSocket && fs.chmod( config.port, '0777' );
  console.log( `Server is now listening on ${ this.address().port }` );
} );
