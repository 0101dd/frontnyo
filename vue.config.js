module.exports = {
  publicPath: './',
  transpileDependencies: [
    'vuetify'
  ],
  chainWebpack (config) {
    config.plugin('html').tap(args => {
      args[0].title = '書彙齋'
      return args
    })
  }
}
