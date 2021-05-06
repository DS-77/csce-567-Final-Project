module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/csce-567-Final-Project/'
    : '/',
  transpileDependencies: [
    'vuetify'
  ]
}
