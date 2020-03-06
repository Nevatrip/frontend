const fs = require('fs'),
  path = require('path'),
  mkdirp = require('mkdirp'),
  techs = require('./config/techs'),
  getLevels = require('./config/levels').getLevels,
  SETS = require('./config/levels').SETS,
  langs = JSON.parse( process.env.LANGS ),
  __DEV__ = process.env.NODE_ENV.toLowerCase() !== 'production';

async function asyncForEach(array, callback) {
  for (let index = 0; index < array.length; index++) {
    await callback(array[index], index, array);
  }
}

module.exports = async (config) => {
  let levels = {};
  const platforms = Object.keys(SETS);
  config.setLanguages( langs );

  ['css', 'js'].forEach((catalog) => {
    pathToStatic = path.resolve('static', 'assets', catalog);
    fs.existsSync(pathToStatic) || mkdirp(pathToStatic);
  });

  await asyncForEach( platforms, async (platform) => {
    levels[platform] = getLevels(platform);
    if (__DEV__) levels[platform].push({ path: path.join('components', 'development.blocks'), check: true });

    // Build bundles from declaration
    await config.nodes(`bundles/*.${platform}`, (nodeConfig) => {
      nodeConfig.addTechs([
        [techs.bem.levels, { levels: levels[platform] }],
        [techs.fileProvider, { target: `?.bemdecl.js` }],
        [techs.bem.deps, { target: `?.deps.js` }],
        [techs.bem.files, { depsFile: `?.deps.js` }],

        // CSS
        [techs.postcss, {
          oneOfSourceSuffixes: ['post.css', 'css'],
          plugins: techs.postcssPlugins,
          target: '?.css',
        }],
        [techs.borschik, { source: '?.css', target: '?.min.css', minify: !__DEV__ }],
        [techs.fileCopy, { source: '?.min.css', target: '../../static/assets/css/?.min.css' }],

        // i18n
        [techs.keysets, { lang: '{lang}' } ],
        [techs.i18n, {
          exports: { ym: true, commonJS: true },
          lang: '{lang}'
        }],
        [techs.bemtreeI18N,{
          sourceSuffixes: ['bemtree', 'bemtree.js'],
          lang: '{lang}',
          target: '?.{lang}.bemtree.js',
        }],

        // templates
        [techs.bemhtml, {
          sourceSuffixes: [ 'bemhtml', 'bemhtml.js' ],
          forceBaseTemplates: true,
          engineOptions: {
            elemJsInstances: true,
            xhtml: false,
            omitOptionalEndTags: true,
            unquotedAttrs: true,
            runtimeLint: true
          },
          target: '?.{lang}.dev.bemhtml.js',
        }],
        [techs.borschik, { source: '?.{lang}.dev.bemhtml.js', target: '?.{lang}.bemhtml.js', minify: false, freeze : true }],

        // client templates
        [techs.bem.depsByTechToBemdecl, {
          target: '?.tmpl.bemdecl.js',
          sourceTech: 'js',
          destTech: 'bemhtml'
        }],
        [techs.bem.deps, {
          target: '?.tmpl.deps.js',
          bemdeclFile: '?.tmpl.bemdecl.js'
        }],
        [techs.bem.files, {
          depsFile: '?.tmpl.deps.js',
          filesTarget: '?.tmpl.files',
          dirsTarget: '?.tmpl.dirs'
        }],
        [techs.bemhtml, {
          filesTarget: '?.tmpl.files',
          sourceSuffixes: ['bemhtml', 'bemhtml.js'],
          engineOptions: { elemJsInstances: true },
          target: '?.browser.bemhtml.js',
        }],

        // js
        [techs.browserJs, { includeYM: true }],
        [techs.fileMerge, {
          sources: ['?.browser.js', '?.browser.bemhtml.js'],
          target: '?.js',
        }],
        [techs.borschik, { source: '?.js', target: '?.min.js', minify: !__DEV__ }],
        [techs.fileCopy, { source: '?.min.js', target: '../../static/assets/js/?.min.js' }]
      ]);

      nodeConfig.addTargets([
        '?.{lang}.bemtree.js',
        '?.{lang}.bemhtml.js',
        '?.min.css',
        '../../static/assets/css/?.min.css',
        '?.min.js',
        '../../static/assets/js/?.min.js',
      ]);
    });
  });
};
