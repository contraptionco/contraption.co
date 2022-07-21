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
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
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
    manifest: {
      lang: 'en'
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
