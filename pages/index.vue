<template lang="pug">
  div
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
      content_type: 'article',
      limit: 5
    })

    return {
      articles: res.items
    }
  }
}
</script>

<style lang="stylus" scoped>
</style>
