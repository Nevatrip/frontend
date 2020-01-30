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
const servicesByTags = require( './routes/servicesByTags' );
const blog = require( './routes/blog' );
const blogDetail = require( './routes/blogDetail' );
const article = require( './routes/article' );

const rootPath = process.env.ROOT_PATH;
const rootProject = process.env.ROOT_PROJECT;
const rootLang = process.env.ROOT_LANG;

const routeRedirect = () => {
  if( rootPath==='' ) {
    if( rootProject==='prahatrip' ) {
      return `/${ rootLang }`
    }
    return ''
  }
  return `/${ rootProject }/${ rootLang }`
}

const router = new UniversalRouter(
  {
    path: '',
    children: [
      ... [
        {
          path: '',
          name: 'root',
          action: () => ( { redirect: routeRedirect() } )
        }
      ],
      {
        path: rootProject==='prahatrip' && rootPath === '' ? '/:lang' : rootPath,
        children: [
          {
            path: '',
            name: 'index',
            action: () => ( { redirect: '/' } ),
            load: async() => await home
          },
          {
            path: '/cart',
            name: 'cart',
            load: async() => await cart
          },
          {
            path: '/blog',
            children: [
              {
                path: '',
                name: 'blog',
                load: async() => await blog
              },
              {
                path: '/:blogDetail',
                name: 'blogDetail',
                load: async() => await blogDetail
              }
            ]
          },
          {
            path: '/api',
            children: [
              {
                path: '',
                name: 'api',
                load: async() => await home
              },
              {
                path: '/tags',
                name: 'api-tags',
                load: async() => await servicesByTags
              }
            ]
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
            path: '/:article',
            children: [
              {
                path: '',
                name: 'article',
                load: async() => await article
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
      params.project = params.project || rootProject;
      params.lang = params.lang || rootLang;
      params.urlTo = generateUrls( context.router );
      const routes = await getRoutes( 'settingServiceCategory', params.lang, params.project );

      if( params.category===undefined || routes.indexOf( params.category ) > -1 ) {
        if( typeof context.route.load === 'function' ) {
          return context.route.load().then( action => action( context, params ) );
        }
        if( typeof context.route.action === 'function' ) {
          return context.route.action( context, params );
        }
      }
      return undefined
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
