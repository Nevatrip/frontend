const sanityClient = require('@sanity/client');
const config = require('../config');
const client = sanityClient({
  projectId: config.apiID,
  dataset: config.apiDataset,
  token: '', // or leave blank to be anonymous user
  useCdn: true // `false` if you want to ensure fresh data
});

module.exports = client;
