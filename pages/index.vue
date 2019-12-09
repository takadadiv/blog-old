<template lang="pug">
  div
    ul
      li(v-for="article in articles" :key="article.sys.id")
        n-link(:to="{ name: 'articles-id', params: { id: article.sys.id } }")
          | {{ article.fields.title }}
</template>

<script>
import client from '~/plugins/contentful'

export default {
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
</style>
