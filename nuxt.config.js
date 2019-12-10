import client from './plugins/contentful'

export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: '/assets/uikit/css/uikit.min.css' },
      { rel: 'stylesheet', href: '/assets/hljs/css/github.css' }
    ],
    script: [
      { src: '/assets/uikit/js/uikit.min.js' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/contentful'
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/markdownit'
  ],
  markdownit: {
    injected: true,
    highlight: (str, lang) => {
      const hljs = require('highlight.js')

      if (lang && hljs.getLanguage(lang)) {
        try {
          return hljs.highlight(lang, str).value
        } catch (e) {
          return ''
        }
      }
    }
  },
  /*
  ** Build configuration
  */
  build: {
    publicPath: '/assets/',
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  },
  /*
  ** Generate configuration
  */
  generate: {
    routes() {
      return client.getEntries({
        content_type: 'article'
      }).then(res => {
        return res.items.map(article => {
          return {
            route: `/articles/${article.sys.id}`,
            payload: article
          }
        })
      })
    }
  },
  /*
  ** Client environment variables
  */
  env: {
    CTF_SPACE_ID: process.env.CTF_SPACE_ID,
    CTF_CDA_ACCESS_TOKEN: process.env.CTF_CDA_ACCESS_TOKEN
  }
}
