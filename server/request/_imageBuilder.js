const { parse } = require( 'url' );
const { basename, resolve } = require( 'path' );
const filesystem = require( 'fs' );

const axios = require( 'axios' );
const urlForImage = require( '@sanity/image-url/urlForImage' );
const imageUrlBuilder = require( '@sanity/image-url' );

const download = url => {
  if( !url ) return '';

  const parsedURL = parse( url );
  const fileName = basename( parsedURL.pathname );
  const path = `/cache/${ fileName }/${ parsedURL.query ? `${ parsedURL.query }/${ fileName }` : fileName }`;
  const pathToDir = resolve( 'static', 'cache', fileName, parsedURL.query || '' );
  const pathToFile = resolve( pathToDir, fileName );

  if( filesystem.existsSync( pathToFile ) ) return path;

  if( !filesystem.existsSync( pathToDir ) ) filesystem.mkdirSync( pathToDir, { recursive: true } );

  axios( { url, responseType: 'stream' } )
    .then( response => response.data
      .pipe( filesystem.createWriteStream( pathToFile ) )
      .on( 'error', () => filesystem.unlink( pathToFile ) )
    );

  return path;
};

function cacheURL () {
  const url = urlForImage( this.options );
  const pathToImage = download( url );

  return pathToImage;
}

const builder = imageUrlBuilder( {
  projectId: process.env.SANITY_STUDIO_API_PROJECT_ID,
  dataset: process.env.SANITY_STUDIO_API_DATASET
} );

const pathToImage = source => builder.image( source );

// eslint-disable-next-line no-proto
builder.__proto__.url = cacheURL;

module.exports = pathToImage;
