const { dirname, resolve } = require('path')

module.exports = {
  api: null,
  service: null,
  port: null,
  host: null,
  entry: (target, filePath) => resolve(dirname(filePath), `entry-${target}`),
  defaultTitle: 'My app',
  templateContext: {},
  favicon: './public/favicon.ico',
  skipRequests: req => req.originalUrl === '/graphql',
  nodeExternalsWhitelist: [/\.css$/, /\?vue&type=style/],
  extendServer: null,
  prependServer: null,
  copyUrlOnStart: false,
  // Paths
  distPath: null,
  error500Html: null,
  templatePath: null,
  serviceWorkerPath: null,
  directives: {},
}
