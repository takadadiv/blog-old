<template lang="pug">
  div
    h1 タグ一覧
    ul
      li(v-for="tag in tags" :key="tag.sys.id")
        n-link(:to="{ name: 'tags-id', params: { id: tag.sys.id } }") {{ tag.fields.name }}
</template>

<script>
import client from '~/plugins/contentful'

export default {
  async asyncData() {
    const res = await client.getEntries({
      content_type: 'tag',
    })

    return {
      tags: res.items
    }
  }
}
</script>
