<template lang="pug">
  div
    .date
      time {{ article.sys.createdAt }}
    .title
      h1 {{ article.fields.title }}
    .tags
      Tag(
        v-for="tag in article.fields.tags"
        :key="tag.sys.id"
        :tag="tag"
      )
    .body
      div(v-html="$md.render(article.fields.body)")
</template>

<script>
import client from '~/plugins/contentful'
import Tag from '~/components/Tag'

export default {
  components: {
    Tag
  },

  async asyncData({ params, payload }) {
    if (payload) {
      return { article: payload }
    }

    return {
      article: await client.getEntry(params.id)
    }
  }
}
</script>

<style lang="stylus" scoped>
</style>
