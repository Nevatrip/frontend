const sanityClient = require( '@sanity/client' );

const client = ( project = 'nevatrip' ) => sanityClient( {
  projectId: process.env[`API_ID_${ project.toUpperCase() }`],
  dataset: process.env[`API_DATASET_${ project.toUpperCase() }`],
  token: '', // or leave blank to be anonymous user
  useCdn: false // `false` if you want to ensure fresh data
} );

module.exports = client;
