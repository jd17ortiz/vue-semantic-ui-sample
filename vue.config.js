var path = require('path')
const config = {
  devServer: {
    port: 5555
  },
  configureWebpack: {
    resolve: {
      alias: {
        jQuery: path.resolve(__dirname, 'node_modules/jquery/dist/jquery.min.js'),
        'fomantic-ui': path.resolve(__dirname, 'node_modules/fomantic-ui')
      }
    }
  }
}
module.exports = config
