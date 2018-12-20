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

  // ['css', 'js'].forEach((catalog) => {
  //   pathToStatic = path.resolve('static', 'assets', catalog);
  //   fs.existsSync(pathToStatic) || mkdirp(pathToStatic);
  // });

  await asyncForEach( platforms, async (platform) => {
    levels[platform] = getLevels(platform);
    !__DEV__ || levels[platform].push({ path: path.join('components', 'development.blocks'), check: true });

    // Build bundles from declaration
    await config.nodes(`bundles/*.${platform}`, (nodeConfig) => {
      nodeConfig.addTechs([
        [techs.bem.levels, { levels: levels[platform] }],
        [techs.fileProvider, { target: `?.bemdecl.js` }],
        [techs.bem.deps, { target: `?.deps.js` }],
        [techs.bem.files, { depsFile: `?.deps.js` }],
        // i18n
        [ techs.keysets, { lang: '{lang}' } ],
        [ techs.i18n, {
          exports: { ym: true, commonJS: true },
          lang: '{lang}'
        } ],
        [
          techs.bemtreeI18N,
          {
            sourceSuffixes: ['bemtree', 'bemtree.js'],
            target: '?.{lang}.bemtree.js',
            lang: '{lang}'
          },
        ],

        // templates
        [ techs.bemhtml, {
          sourceSuffixes: [ 'bemhtml', 'bemhtml.js' ],
          target: '?.{lang}.bemhtml.js',
          forceBaseTemplates: true,
          engineOptions: {
            elemJsInstances: true,
            xhtml: false,
            omitOptionalEndTags: true,
            unquotedAttrs: true,
            runtimeLint: true
          }
        } ],

        [
          techs.postcss,
          {
            target: '?.css',
            oneOfSourceSuffixes: ['post.css', 'css'],
            plugins: techs.postcssPlugins,
          },
        ],

        // borschik
        [techs.borschik, { source: '?.css', target: '?.min.css', minify: !__DEV__ }],

        [techs.fileCopy, { source: '?.min.css', target: '../../static/assets/css/?.min.css' }]
      ]);

      nodeConfig.addTargets([
        '?.{lang}.bemtree.js',
        '?.{lang}.bemhtml.js',
        '?.min.css',
        '../../static/assets/css/?.min.css'
      ]);
    });
  });

  /*
  console.log( levels );

  platforms.forEach((platform) => {
    config.nodes('bundles/*', (nodeConfig) => {


      nodeConfig.addTechs([
        // bemtree
      ]);

      console.log( 'nodeConfig', nodeConfig );

      nodeConfig.addTargets(['?.' + platform + '.bemtree.js', '?.' + platform + '.bemhtml.js']);
    });

    config.node('dist/' + platform, function(nodeConfig) {
      nodeConfig.addTechs([
        [techs.bem.levels, { levels: levels }],
        [techs.bem.levelsToBemdecl, { target: '.tmp.bemdecl.js' }],

        // essential
        [techs.bem.deps, { bemdeclFile: '.tmp.bemdecl.js', target: '.tmp.deps.js' }],
        [
          techs.fileWrite,
          {
            target: '.tmp.i-bem-dom-init-auto.deps.js',
            content:
              'module.exports = ' +
              JSON.stringify({
                deps: [
                  {
                    block: 'i-bem-dom',
                    elem: 'init',
                    mod: 'auto',
                    val: true,
                  },
                  {
                    block: 'i-bem-dom',
                    elem: 'init',
                    mod: 'auto',
                  },
                ],
              }),
          },
        ],
        [
          techs.bem.subtractDeps,
          {
            from: '.tmp.deps.js',
            target: '.tmp.no-autoinit.deps.js',
            what: '.tmp.i-bem-dom-init-auto.deps.js',
          },
        ],
        [techs.bem.files, { depsFile: '.tmp.deps.js' }],
        [
          techs.bem.files,
          {
            depsFile: '.tmp.no-autoinit.deps.js',
            filesTarget: '.tmp.no-autoinit-files.files',
            dirsTarget: '.tmp.no-autoinit-files.dirs',
          },
        ],

        // css
        [
          techs.postcss,
          {
            target: '?.css',
            oneOfSourceSuffixes: ['post.css', 'css'],
            plugins: techs.postcssPlugins,
          },
        ],
        [techs.borschik, { minify: !__DEV__, freeze: true, source: '?.css', target: '?.min.css' }],
        [techs.fileCopy, { source: '?.min.css', target: '../../static/assets/css/?.min.css' }],

        // client templates
        [
          techs.bem.depsByTechToBemdecl,
          {
            target: '.?.tmpl.bemdecl.js',
            sourceTech: 'js',
            destTech: 'bemhtml',
          },
        ],
        [
          techs.bem.deps,
          {
            target: '.?.tmpl.deps.js',
            bemdeclFile: '.?.tmpl.bemdecl.js',
          },
        ],
        [
          techs.bem.files,
          {
            depsFile: '.?.tmpl.deps.js',
            filesTarget: '?.tmpl.files',
            dirsTarget: '?.tmpl.dirs',
          },
        ],
        [
          techs.bemhtml,
          {
            target: '.?.browser.bemhtml.js',
            filesTarget: '?.tmpl.files',
            sourceSuffixes: ['bemhtml', 'bemhtml.js'],
            engineOptions: {
              elemJsInstances: true,
            },
          },
        ],

        // js
        [
          techs.browserJs,
          {
            target: '.?.browser.js',
          },
        ],
        [
          techs.fileMerge,
          {
            target: '.?.pre.es6.js',
            sources: ['.?.browser.bemhtml.js', '.?.browser.js'],
          },
        ],

        __DEV__
          ? [techs.fileCopy, { target: '?.pre-1.js', source: '.?.pre.es6.js' }]
          : [techs.babel, { target: '.?.pre-without-polyfill.js', sourceTarget: '.?.pre.es6.js', babelOptions: { presets: [ [ "env", { "targets": { "browsers": ["last 2 versions", "safari >= 7"] } } ] ], plugins: ["transform-object-rest-spread"] } }],

        __DEV__
          ? [techs.fileCopy, { target: '?.pre.js', source: '?.pre-1.js' }]
          : [techs.babelPolyfill, { target: '?.pre.js', source: '.?.pre-without-polyfill.js' }],

        [
          techs.prependYm,
          {
            source: '?.pre.js',
            target: '?.js',
          },
        ],
        [techs.borschik, { minify: !__DEV__, freeze: false, source: '?.js', target: '?.min.js' }],
        [techs.fileCopy, { source: '?.min.js', target: '../../static/assets/js/?.min.js' }],
      ]);

      nodeConfig.addTargets([
        '../../static/assets/css/?.min.css',
        '../../static/assets/js/?.min.js',
      ]);
    });
  });
  */
};
