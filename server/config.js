module.exports = {
  appName: process.env.APP_NAME,
  __DEV__: process.env.NODE_ENV.toLowerCase() !== 'production',
  host: process.env.HOST,
  port: parseInt( process.env.PORT, 10 ),
  staticFolder: process.env.STATIC_FOLDER.toLowerCase(),
  sessionSecret: process.env.SESSION_SECRET,
  levels: JSON.parse( process.env.LEVELS ),
  cacheTTL: parseInt( process.env.CACHE_TTL, 10 ),
  api: process.env.API,
  automake: !!process.env.AUTOMAKE,
  livereload: !!process.env.LIVERELOAD,
  logLevel: process.env.LOG_LEVEL.toLowerCase(),
  apiID: process.env.API_ID,
  apiDataset: process.env.API_DATASET,
  langs: JSON.parse( process.env.LANGS )
};
