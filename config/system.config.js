var uirVer = '1.0.0-beta.4';
var rxjsVer = '5.0.1';
var ng2Ver = '2.4.4';
var ng2Pkgs = ['core', 'compiler', 'common', 'http', 'platform-browser-dynamic', 'platform-browser'];

System.config({
  //use typescript for compilation
  transpiler: 'typescript',
  //typescript compiler options
  typescriptOptions: {
    emitDecoratorMetadata: true
  },
  //map tells the System loader where to look for things
  map: Object.assign(ng2MapObject(ng2Pkgs, ng2Ver), {
    'hellogalaxy': "./hellogalaxy.ts",
    'rxjs': 'https://unpkg.com/rxjs@' + rxjsVer,
    'ui-router-ng2': 'https://unpkg.com/ui-router-ng2@' + uirVer + '/_bundles/ui-router-ng2',
    'ui-router-visualizer': 'https://unpkg.com/ui-router-visualizer@2'
  }),
  //packages defines our app package
  packages: Object.assign(ng2PackagesObject(ng2Pkgs), {
    rxjs: { defaultExtension: 'js' }
  }),
  meta: { "ui-router-ng2": { format: "cjs" } },
});

function ng2MapObject(ng2Packages, ng2Ver) {
  return ng2Packages.reduce(function (acc, pkg) {
    acc['@angular/' + pkg] = 'https://unpkg.com/@angular/' + pkg + '@' + ng2Ver;
    return acc;
  }, {});
}

function ng2PackagesObject(ng2Packages) {
  return ng2Packages.reduce(function(acc, pkg) {
    acc['@angular/' + pkg] = { main: 'bundles/' + pkg + '.umd.js', defaultExtension: 'js' }
    return acc;
  }, {});
}

