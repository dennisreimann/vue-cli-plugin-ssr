// this file is for cases where we need to access the
// webpack config as a file when using CLI commands.
const { getWebpackConfigs } = require('./lib/webpack')

// basically taken from @vue/cli-service webpack.config.js
// https://github.com/vuejs/vue-cli/blob/dev/packages/%40vue/cli-service/webpack.config.js
let service = process.VUE_CLI_SERVICE

if (!service || process.env.VUE_CLI_API_MODE) {
  const Service = require('@vue/cli-service')
  service = new Service(process.env.VUE_CLI_CONTEXT || process.cwd())
  service.init(process.env.VUE_CLI_MODE || process.env.NODE_ENV)
}

module.exports = getWebpackConfigs(service)
