'use strict';

const UniversalRouter = require( 'universal-router' );
const generateUrls = require( 'universal-router/generateUrls' );

const getRoutes = require( './request/getRoutesBySectionAndLang' );
const servicesByCategory = require( './routes/servicesByCategory' );
const servicesByCollection = require( './routes/servicesByCollection' );
const home = require( './routes/home' );
const service = require( './routes/service' );
const error = require( './routes/error' );
const cart = require( './routes/cart' );

const router = new UniversalRouter(
  {
    path: '/',
    name: 'root',
    children: [
      {
        path: '',
        name: 'index',
        load: async() => await home
      },
      {
        path: '/cart',
        name: 'cart',
        load: async() => await cart
      },
      {
        path: '/:category',
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
          }
        ]
      },
      {
        path: '/:collection',
        children: [
          {
            path: '',
            name: 'servicesByCollection',
            load: async() => await servicesByCollection
          }
        ]
      },
      {
        path: '(.*)',
        name: 'error',
        load: async() => await error
      }
    ],
    async action( { next } ) {
      const route = await next() || {};

      return route;
    }
  },
  {
    async resolveRoute( context, params ) {
      params.urlTo = generateUrls( context.router );

      const routes = await getRoutes( 'settingServiceCategory', params.lang );

      if( params.category===undefined || routes.indexOf( params.category ) > -1 ) {
        if( typeof context.route.load === 'function' ) {
          return context.route.load().then( action => action( context, params ) );
        }
        if( typeof context.route.action === 'function' ) {
          return context.route.action( context, params );
        }
      }
      return undefined;
    }

    // errorHandler(error, context) {
    //   console.error(error);
    //   // console.info(context);
    //   return error.status === 404
    //     ? 'Page Not Found'
    //     : 'Oops! Something went wrong:  ' + error
    // }
  },
);

module.exports = router;
