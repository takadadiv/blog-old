<template lang="pug">
  div

    div.menu

    div.uk-grid-collapse(uk-grid v-for="article in articles" :key="article.sys.id")
      div.uk-width-expand
        div.summary
          .date
            time {{ article.sys.createdAt }}
          .title
            n-link(:to="{ name: 'articles-id', params: { id: article.sys.id } }") {{ article.fields.title }}
          .tag
            span(v-for="tag in article.fields.tag" :key="tag") {{ tag }}
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
.menu
  height 200px

.summary
  padding 30px
  .title
    margin-top 5px
    font-size 20px
  .tag
    margin-top 10px
</style>
