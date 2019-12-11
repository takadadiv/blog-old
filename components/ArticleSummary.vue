<template lang="pug">
  .uk-grid-collapse(uk-grid)
    .uk-width-expand
      .summary
        .date
          time {{ article.sys.createdAt }}
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

export default {
  components: {
    Tag
  },

  props: {
    article: Object
  }
}
</script>

<style lang="stylus" scoped>
.summary
  padding 30px
  .title
    margin-top 5px
    font-size 20px
  .tags
    margin-top 10px
</style>
