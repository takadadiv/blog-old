<template lang="pug">
  nav.uk-navbar-container.uk-navbar-transparent
    .uk-navbar-left
      ul.uk-navbar-nav
        div.page-title
          h1 title
        li
          n-link(:to="{ name: 'index' }") ブログ
        //- li
        //-   a(href="#") ポートフォリオ
        //- li
        //-   a(href="#") スライド
        //- li
        //-   a(href="#") プロフィール
</template>

<script>
export default {

}
</script>

<style lang="stylus" scoped>
</style>
