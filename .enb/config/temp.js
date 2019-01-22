// console.log(levels);

platforms.forEach((platform) => {
  config.nodes('bundles/*', (nodeConfig) => {


    nodeConfig.addTechs([
      // bemtree
    ]);

    console.log('nodeConfig', nodeConfig);

    nodeConfig.addTargets(['?.' + platform + '.bemtree.js', '?.' + platform + '.bemhtml.js']);
  });

  config.node('dist/' + platform, function (nodeConfig) {
    nodeConfig.addTechs([
      [techs.bem.levels, {levels: levels}],
      [techs.bem.levelsToBemdecl, {target: '.tmp.bemdecl.js'}],

      // essential
      [techs.bem.deps, {bemdeclFile: '.tmp.bemdecl.js', target: '.tmp.deps.js'}],
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
      [techs.bem.files, {depsFile: '.tmp.deps.js'}],
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
      [techs.borschik, {minify: !__DEV__, freeze: true, source: '?.css', target: '?.min.css'}],
      [techs.fileCopy, {source: '?.min.css', target: '../../static/assets/css/?.min.css'}],

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
        ? [techs.fileCopy, {target: '?.pre-1.js', source: '.?.pre.es6.js'}]
        : [techs.babel, {
          target: '.?.pre-without-polyfill.js',
          sourceTarget: '.?.pre.es6.js',
          babelOptions: {
            presets: [["env", {"targets": {"browsers": ["last 2 versions", "safari >= 7"]}}]],
            plugins: ["transform-object-rest-spread"]
          }
        }],

      __DEV__
        ? [techs.fileCopy, {target: '?.pre.js', source: '?.pre-1.js'}]
        : [techs.babelPolyfill, {target: '?.pre.js', source: '.?.pre-without-polyfill.js'}],

      [
        techs.prependYm,
        {
          source: '?.pre.js',
          target: '?.js',
        },
      ],
      [techs.borschik, {minify: !__DEV__, freeze: false, source: '?.js', target: '?.min.js'}],
      [techs.fileCopy, {source: '?.min.js', target: '../../static/assets/js/?.min.js'}],
    ]);

    nodeConfig.addTargets([
      '../../static/assets/css/?.min.css',
      '../../static/assets/js/?.min.js',
    ]);
  });
});
