<template lang="pug">
  div

    .menu

    ArticleSummary(v-for="article in articles" :key="article.sys.id" :article="article")
</template>

<script>
import client from '~/plugins/contentful'
import ArticleSummary from '~/components/ArticleSummary'

export default {
  components: {
    ArticleSummary
  },

  async asyncData() {
    const res = await client.getEntries({
      content_type: 'article'
    })

    return {
      articles: res.items
    }
  }
}
</script>

<style scoped lang="stylus">
.menu
  height 200px
</style>
