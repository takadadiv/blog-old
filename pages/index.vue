<template>
  <div>
    <ul>
      <li v-for="article in articles" :key="article.sys.id">
        <pre>
          {{ article }}
        </pre>
      </li>
    </ul>
  </div>
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

<style>

</style>
