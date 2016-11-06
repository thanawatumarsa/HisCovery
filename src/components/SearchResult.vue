<template lang="html">
  <div v-for="youtube in list">
    {{ youtube.snippet.title }}<br>
    <img :src="youtube.snippet.thumbnails.default.url" alt="" @click="select(youtube.id.videoId)"> <br>
  </div>
</template>

<script>
export default {
  props: ['list', 'select'],
  data () {
    return {}
  }
}
</script>

<style lang="css">
</style>
