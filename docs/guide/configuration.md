# Configuration

Here are the optional settings available in your `vue.config.js` file:

```js
const { dirname, resolve } = require('path')

module.exports = {
  pluginOptions: {
    ssr: {
      // Listening port for `serve` command
      port: null,
      // Listening host for `serve` command
      host: null,
      // Entry for each target
      entry: (target, filePath) => resolve(dirname(filePath), `entry-${target}`),
      // Default title
      defaultTitle: 'My app',
      // Optional and additional template context, like custom variables
      templateContext: {},
      // Path to favicon
      favicon: './public/favicon.ico',
      // Skip some requests from being server-side rendered
      skipRequests: req => req.originalUrl === '/graphql',
      // See https://ssr.vuejs.org/guide/build-config.html#externals-caveats
      nodeExternalsWhitelist: [/\.css$/, /\?vue&type=style/],
      // Function to connect custom middlewares
      extendServer: (app, options, config) => {
        const cookieParser = require('cookie-parser')
        app.use(cookieParser())
      },
      // Copy URL to system clipboard on start
      copyUrlOnStart: true,
      // Paths
      distPath: resolve(__dirname, './dist'),
      error500Html: null,
      templatePath: resolve(__dirname, './dist/index.html'),
      serviceWorkerPath: resolve(__dirname, './dist/service-worker.js'),
      // Directives fallback
      directives: {
        // See 'Directive' chapter
      }
    }
  }
}
```
