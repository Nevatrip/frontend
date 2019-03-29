const path = require( 'path' );
const fs = require( 'fs' );

const glob = require( 'glob' );
const yaml = require( 'yaml' );
const merge = require( 'deepmerge' );

const PROJECT = process.env.PROJECT;
const LANGS = process.env.LANGS;

const arrayMerge = ( destinationArray, sourceArray ) => sourceArray;
const defaultConfigPath = [path.join( __dirname, '../', 'config.yaml' )];
const matches = glob.sync( path.join( __dirname, '../', 'config.*.yaml' ) );

const configsPath = defaultConfigPath.concat( matches );
const configs = configsPath.map( configPath => yaml.parse( fs.readFileSync( configPath, 'utf8' ) ) );
const config = merge.all( configs, { arrayMerge } );

if ( PROJECT && config.projects.hasOwnProperty( PROJECT ) ) {
  const project = config.projects[PROJECT];
  const projectMerge = merge( config.projects.default, project.default );

  config.project = projectMerge;

  // Object.keys( projects[ PROJECT ] )
  const availableLangs = Object.keys( project );
  const availableLangsIndex = availableLangs.indexOf('default');
  if (availableLangsIndex > -1) {
    availableLangs.splice(availableLangsIndex, 1);
  }

  const defLangs = LANGS
    ? LANGS.toLowerCase()
           .replace(/\s+/g, '')
           .split(',')
    : config.projects.default.langs;

  const instance = {}
  defLangs.forEach( lang => {
    if ( project.hasOwnProperty( lang ) ) {
      instance[ lang ] = merge( projectMerge, project[ lang ] );
    }
  } );

  config.project.instance = instance;
} else {
  config.project = config.projects.default;
}

delete config.projects;

console.log( config.project.instance );

// module.exports = {
//   appName: config.name,
//   __DEV__: config.project.server.env.toLowerCase() !== 'production',
//   host: config.project.server.host,
//   port: parseInt( config.project.server.port, 10 ),
//   staticFolder: config.project.server.static_folder,
//   sessionSecret: config.project.server.session_secret,
//   levels: config.project.sets,
//   cacheTTL: parseInt( config.project.server.cache_ttl, 10 ),
//   api: config.project.api,
//   automake: !!config.build.automake,
//   livereload: !!config.build.livereload,
//   logLevel: config.project.logs.level.toLowerCase(),
//   apiID: config.project.api.id,
//   apiDataset: config.project.api.dataset,
//   langs: Object.keys( config.project.port )
// };
