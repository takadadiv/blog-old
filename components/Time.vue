<template lang="pug">
  time {{ formattedDate }}
</template>

<script>
import dayjs from 'dayjs'

export default {
  props: {
    datetime: String
  },

  computed: {
    formattedDate: vm => {
      return dayjs(vm.datetime).format('YYYY-MM-DD')
    }
  }
}
</script>

<style lang="stylus" scoped>

</style>
