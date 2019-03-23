const path = require( 'path' );
const fs = require( 'fs' );

const glob = require( 'glob' );
const yaml = require( 'yaml' );
const merge = require( 'deepmerge' );

const project = process.env.PROJECT;
const defaultConfigPath = [path.join( __dirname, '../', 'config.yaml' )];

const matches = glob.sync( path.join( __dirname, '../', 'config.*.yaml' ) );

const configsPath = defaultConfigPath.concat( matches );
const configs = configsPath.map( configPath => yaml.parse( fs.readFileSync( configPath, 'utf8' ) ) );
const arrayMerge = ( destinationArray, sourceArray ) => sourceArray;
const config = merge.all( configs, {
  arrayMerge
} );

config.project = project ? merge( config.projects.default, config.projects[project], { arrayMerge } ) : config.projects.default;

console.log( config );

module.exports = {
  appName: config.name,
  __DEV__: config.project.server.env.toLowerCase() !== 'production',
  host: config.project.server.host,
  port: parseInt( config.project.server.port, 10 ),
  staticFolder: config.project.server.static_folder,
  sessionSecret: config.project.server.session_secret,
  levels: config.project.sets,
  cacheTTL: parseInt( config.project.server.cache_ttl, 10 ),
  api: config.project.api,
  automake: !!config.build.automake,
  livereload: !!config.build.livereload,
  logLevel: config.project.logs.level.toLowerCase(),
  apiID: config.project.api.id,
  apiDataset: config.project.api.dataset,
  langs: config.project.langs
};
