'use strict';

const fs = require( 'fs' );
const path = require( 'path' );

const app = require( 'express' )();
const PrettyError = require( 'pretty-error' );
const debugHTTP = require( 'debug-http' );

const { __DEV__, livereload, port, sessionSecret, staticFolder } = require( './config.js' );
const router = require( './router.js' );
const render = require( './render' ).render;
const rebuild = require( './rebuild' );

const isSocket = isNaN( port );
const skip = ( req, res, next ) => next();

if( __DEV__ ) {
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
  //.use( __DEV__ && livereload ? require( 'tiny-lr' ).middleware( { app, dashboard: true } ) : skip )
  .use( require( 'serve-favicon' )( path.join( staticFolder, 'favicon.ico' ) ) )
  .use( require( 'serve-static' )( staticFolder ) )
  .use( require( 'cookie-parser' )() )
  .use( require( 'body-parser' ).urlencoded( { extended: true } ) )
  .use(
    require( 'express-session' )( {
      resave: true,
      saveUninitialized: true,
      secret: sessionSecret
    } ),
  )
  .use( __DEV__ ? skip : require( 'connect-slashes' )() );

/*
 * Routing
 *
 *****************************************************************************/

app.all( '*', async( req, res, next ) => {
  try {
    console.time( 'Route' );

    const route = await router.resolve( {
      pathname: req.path,
      query: req.query || {}
    } );

    console.timeEnd( 'Route' );

    if( route.redirect ) {
      res.redirect( route.status || 302, route.redirect );

      return;
    }

    if( route.doctype ) {
      res.contentType( route.doctype )
    }

    res.status( route.status || 200 );

    if( route.page ) {
      console.time( 'Render' );

      const html = await render( req, res, route );

      console.timeEnd( 'Render' );

      return res.send( html );//ERROR IS HERE
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

if( __DEV__ ) {
  rebuild( app );
}

/*
 * Start server
 *
 *****************************************************************************/
isSocket && fs.existsSync( port ) && fs.unlinkSync( port );
app.listen( port, function() {
  isSocket && fs.chmod( port, '0777' );
  console.log( `Server is now listening on ${ this.address().port }` );
} );
