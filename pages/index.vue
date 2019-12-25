<template lang="pug">
  div
    ArticleSummary(v-for="article in articles" :key="article.sys.id" :article="article")
</template>

<script>
import client from '~/plugins/contentful'
import Navbar from '~/components/Navbar'
import ArticleSummary from '~/components/ArticleSummary'

export default {
  components: {
    ArticleSummary,
    Navbar
  },

  middleware: 'getAllArticles',

  computed: {
    articles() {
      return this.$store.state.articles.entries
    }
  }
}
</script>

<style lang="stylus" scoped>
</style>
