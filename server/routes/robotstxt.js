'use strict';

const getServiceBasedData = require( '../request/getServiceBasedData' );

const action = async ( context, params ) => {
  const {
    project,
    lang
  } = params;

  const serviceBasedData = await getServiceBasedData( project, lang );

  const link = ( serviceBasedData || {} ).langSiteLink[lang].replace( /\s/g, '' );
  const site = link.charAt( link.length-1 ) === '/' ? link.substring( 0, link.length-1 ) : link;

  const sitemap = `${ site }/sitemap`;

  const content = 'User-agent: *\n' +
                  'Disallow: /cgi-bin\n' +
                  'Disallow: /manager/\n' +
                  'Disallow: /assets/\n' +
                  'Disallow: /core/\n' +
                  'Disallow: /connectors/\n' +
                  'Disallow: /index.php\n' +
                  'Disallow: *?*\n' +
                  'Disallow: *utm*=\n' +
                  'Disallow: *openstat=\n' +
                  'Disallow: *from=\n' +
                  'Allow: /assets/*.jpg\n' +
                  'Allow: /assets/*.jpeg \n' +
                  'Allow: /assets/*.gif \n' +
                  'Allow: /assets/*.png \n' +
                  'Allow: /assets/*.pdf \n' +
                  'Allow: /assets/*.doc \n' +
                  'Allow: /assets/*.docx \n' +
                  'Allow: /assets/*.xls \n' +
                  'Allow: /assets/*.xlsx \n' +
                  'Allow: /assets/*.ppt \n' +
                  'Allow: /assets/*.pptx \n' +
                  'Allow: /assets/*.js \n' +
                  'Allow: /assets/*.css\n' +
                  'Allow: *?page=\n' +
                  '\n' +
                  `Sitemap: ${ sitemap }`;

  return {
    page: 'robotstxt',
    doctype: 'txt',
    content,
    params
  }
};

module.exports = action;
