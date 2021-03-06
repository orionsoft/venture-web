Package.describe({
  name: 'panter:orion-froala2',
  summary: 'Froala editor for orion',
  version: '1.7.0',
  git: 'https://github.com/orionjs/orion'
})

Package.onUse(function (api) {
  api.versionsFrom('1.0')

  api.use([
    'blaze-html-templates@1.0.1',
    'ecmascript@0.1.6',
    'orionjs:base@1.8.0',
    'orionjs:attributes@1.8.0',
    'less@2.5.0_1',
    'orionjs:filesystem@1.8.0',
    'froala:editor@2.0.1',
    'nimble:restivus@0.8.4'
  ])

  api.imply([
    'froala:editor'
  ])

  api.addFiles([
    'attribute.js'
  ])
  api.addFiles([
    'froala_server.js'
  ], 'server')

  api.addFiles([
    'froala.html',
    'froala.js',
    'froala.less'
  ], 'client')
})
