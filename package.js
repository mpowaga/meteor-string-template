Package.describe({
  name: 'mpowaga:string-template',
  summary: 'Compile spacebars templates from string',
  version: '0.1.0',
  git: 'https://github.com/mpowaga/meteor-string-template'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.1');

  api.use([
  	'templating',
  	'spacebars-compiler'
  ], 'client');

  api.addFiles([
  	'lib/client/string-template.js'
  ], 'client');

  api.export('StringTemplate', 'client');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('mpowaga:string-template');
  api.addFiles('mpowaga:string-template-tests.js');
});
