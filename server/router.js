'use strict';

const UniversalRouter = require( 'universal-router' );
const generateUrls = require( 'universal-router/generateUrls' );

const servicesByCategory = require( './routes/servicesByCategory' );
const home = require( './routes/home' );
const service = require( './routes/service' );
const error404 = require( './routes/404' );

const router = new UniversalRouter(
  {
    path: '',
    name: 'root',
    children: [
      {
        path: '',
        name: 'index',
        load: async() => await home
      },
      {
        path: `/:category`,
        children: [
          {
            path: '',
            name: 'servicesByCategory',
            load: async() => await servicesByCategory
          },
          {
            path: '/:service',
            name: 'service',
            load: async() => await service
          },
        ]
      },
      {
        path: '(.*)',
        name: '404',
        load: async() => await error404
      },
    ],

    async action( { next } ) {
      const route = await next() || {};

      return route;
    }
  },
  {
    resolveRoute( context, params ) {
      params.urlTo = generateUrls( context.router );

      if( typeof context.route.load === 'function' ) {
        return context.route.load().then( action => action( context, params ) );
      }
      if( typeof context.route.action === 'function' ) {
        return context.route.action( context, params );
      }
      return undefined;
    }
  },
);

module.exports = router;
