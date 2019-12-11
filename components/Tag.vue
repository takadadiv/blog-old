<template lang="pug">
  n-link(:to="{ name: 'tags-id', params: { id: tag.sys.id } }")
    span(uk-icon="hashtag")
    span.tag {{ tag.fields.name }}
</template>

<script>
export default {
  props: {
    tag: Object
  }
}
</script>

<style lang="stylus" scoped>
.tag
  vertical-align middle
</style>
