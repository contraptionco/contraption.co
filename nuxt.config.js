const description = 'The Contraption Company is a digital product development studio by Philip I. Thomas.'
export default {
  target: 'static',

  head: {
    title: 'Contraption Co.',
    titleTemplate: (titleChunk) => {
      // If undefined or blank then we don't need the divider
      const title = 'Contraption Co.'
      return titleChunk && titleChunk !== title
        ? `${titleChunk} | ${title}`
        : title
    },

    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: description },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
    ],
    htmlAttrs: {
      lang: 'en'
    }
  },

  css: [
  ],

  googleFonts: {
    download: true,
    families: {
      Inter: {
        wght: [100 + '..' + 900]
      }
    }
  },

  plugins: [
  ],

  components: true,

  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/svg',
    '@nuxtjs/google-fonts'
  ],

  modules: [
    '@nuxtjs/pwa',
    '@nuxt/content',
    '@nuxtjs/sitemap',
    '@lostdesign/nuxt-fathom'
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
      description,
      author: 'Philip I. Thomas'
    }
  },

  content: {},

  build: {
  },
  generate: {
    fallback: true
  },
  fathom: {
    spa: 'history',
    siteId: 'KAJMKSIJ',
    url: 'https://radio.contraption.co/script.js',
    includedDomains: [
      'contraption.co',
      'www.contraption.co'
    ]
  },
  router: {
    middleware: ['fathom']
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
