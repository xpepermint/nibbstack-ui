export default {
  mode: 'spa',
  head: {
    title: 'NibbStack - Rust Private Registry',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' }
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
    '@nuxtjs/eslint-module',
    '@nuxtjs/stylelint-module',
    [
      '@nuxtjs/google-analytics',
      {
        id: 'UA-156579164-1'
      }
    ]
  ],
  styleResources: {
    scss: ['./assets/styles/variables.scss']
  },
  stylelint: {
    quiet: true,
    fix: true
  },
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/style-resources',
    ['@nuxtjs/google-tag-manager', { id: 'GTM-52KS2KP' }]
  ],
  axios: {},
  build: {
    extend(config, ctx) {}
  }
}
