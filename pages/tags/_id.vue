<template lang="pug">
div
  .uk-grid-collapse(uk-grid v-for="article in articles" :key="article.sys.id")
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
import client from '~/plugins/contentful'

export default {
  async asyncData({ params }) {
    const res = await client.getEntries({
      content_type: 'article',
      'fields.tags.sys.id': params.id
    })

    return {
      articles: res.items
    }
  }
}
</script>
