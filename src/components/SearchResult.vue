<template lang="html">
  <div id="list">
    <div id="textmenu">
      PlayList
    </div>
    <div id="playlists">
      <div v-for="youtube in list">
        <list-video :list = "list" :select = "select" :toggleshow = "toggleshow" :index ="$index"></list-video>
      </div>
    </div>
  </div>
</template>

<script>
import ListVideo from '../components/ListVideo'

export default {
  props: ['list', 'select', 'toggleshow'],
  data () {
    return {}
  },
  components: {
    ListVideo
  }
}
</script>

<style lang="css">
</style>
