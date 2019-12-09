<template lang="pug">
  div
    pre {{ article }}
    h1 {{ article.fields.title }}
    p
      time {{ article.sys.createdAt }}
    ul
      li(v-for="tag in article.fields.tag" :key="tag") {{ tag }}
    pre {{ article.fields.body }}

</template>

<script>
import client from '~/plugins/contentful'

export default {
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

<style scoped lang="stylus">
</style>
