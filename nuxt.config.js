export default {
  target: 'static',

  head: {
    title: 'Contraption Co.',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
    ]
  },

  css: [
  ],

  plugins: [
  ],

  components: true,

  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/svg'
  ],

  modules: [
    '@nuxtjs/pwa',
    '@nuxt/content',
    '@nuxtjs/sitemap'
  ],

  pwa: {
    workbox: false,
    manifest: {
      lang: 'en'
    },
    icon: {
      source: 'assets/logo/icon.png'
    },
    meta: {
      name: 'Contraption Co.',
      ogHost: 'https://www.contraption.co',
      twitterCreator: '@philipithomas',
      themeColor: '#111111',
      description: 'The Contraption Company is a digital product development studio by Philip I. Thomas.',
      author: 'Philip I. Thomas'
    }
  },

  content: {},

  build: {
  },
  generate: {
    fallback: true
  },
  sitemap: {
    hostname: 'https://www.contraption.co',
    gzip: true
    /*
    exclude: ['/policies/*'],
    async routes () {
      const { $content } = require('@nuxt/content')
      const columns = await $content('columns').only(['slug']).fetch()

      return [
        ...pages,
        ...columns.map(file =>
          file.slug === 'index' ? '/' : `${file.slug}/`
        )
      ]
    } */
  }
}
