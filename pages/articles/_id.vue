<template lang="pug">
  article.article
    .date
      Time(:datetime="article.sys.createdAt")
    h1.title
      | {{ article.fields.title }}
    .tags
      Tag(
        v-for="tag in article.fields.tags"
        :key="tag.sys.id"
        :tag="tag"
      )
    .body(v-html="$md.render(article.fields.body)")
</template>

<script>
import Tag from '~/components/Tag'
import Time from '~/components/Time'
import client from '~/plugins/contentful'

export default {
  components: {
    Tag,
    Time
  },

  async asyncData({ payload, params, store, error }) {
    if (payload) {
      return { article: payload }
    }

    // storeを探して見つかれば返す
    let article = store.state.articles.entries.find(a => a.sys.id === params.id)

    if (article) {
      console.log('store hit: article')
      return { article }
    }

    // 次にcontentfulを探して見つかれば返す
    try {
      article = await client.getEntry(params.id)
    } catch (e) {
      if (e.sys.id === 'NotFound') {
        return error({ statusCode: 404 })
      }
      throw e
    }

    console.log('get from contentful: article')
    return { article }
  }
}
</script>

<style lang="stylus" scoped>
.article
  margin 50px 0
.title
  margin 0
.body
  margin-top 75px
  >>> pre
    background #f3f3f3
    margin 0
    padding 20px
    border-top 1px solid #777
    border-bottom 1px solid #777
  >>> hr
    margin 45px 0 40px
</style>
