export default {
  mode: 'spa',
  head: {
    title: 'NibbStack - Rust Private Registry',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [
      { rel: 'icon', type: 'image/png', href: '/favicon.png' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Roboto:300,400,500&display=swap'
      }
    ]
  },
  loading: { color: '#fff' },
  css: ['~/assets/styles/global'],
  plugins: [],
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/stylelint-module
    '@nuxtjs/stylelint-module'
  ],
  styleResources: {
    scss: ['./assets/styles/variables.scss']
  },
  stylelint: {
    quiet: true,
    fix: true
  },
  modules: ['@nuxtjs/axios', '@nuxtjs/style-resources'],
  axios: {},
  build: {
    extend(config, ctx) {}
  }
}
