module.exports = {
  publicPath: './',
  transpileDependencies: [
    'vuetify'
  ],
  chainWebpack (config) {
    config.plugin('html').tap(args => {
      args[0].title = '購物網'
      return args
    })
  }
}
