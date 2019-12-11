<template lang="pug">
    .uk-grid-collapse(uk-grid)
      .uk-width-expand
        .summary
          .date
            time {{ article.sys.createdAt }}
          .title
            n-link(:to="{ name: 'articles-id', params: { id: article.sys.id } }") {{ article.fields.title }}
          .tag
            n-link(
              v-for="tag in article.fields.tags"
              :key="tag.sys.id"
              :to="{ name: 'tags-id', params: { id: tag.sys.id } }"
            ) {{ tag.fields.name }}
</template>

<script>
export default {
  props: {
    article: Object
  }
}
</script>

<style scoped lang="stylus">
.summary
  padding 30px
  .title
    margin-top 5px
    font-size 20px
  .tag
    margin-top 10px
</style>
