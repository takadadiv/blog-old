<template lang="pug">
  .summary.uk-grid-collapse(uk-grid)
    .uk-width-expand
      .date
        Time(:datetime="article.sys.createdAt")
      .title
        n-link(:to="{ name: 'articles-id', params: { id: article.sys.id } }") {{ article.fields.title }}
      .tags
        Tag(
          v-for="tag in article.fields.tags"
          :key="tag.sys.id"
          :tag="tag"
        )
</template>

<script>
import Tag from '~/components/Tag'
import Time from '~/components/Time'

export default {
  components: {
    Tag,
    Time
  },

  props: {
    article: Object
  }
}
</script>

<style lang="stylus" scoped>
.summary
  + .summary
    margin-top 50px
.title
  margin-top 5px
  font-size 20px
.tags
  margin-top 10px
</style>
