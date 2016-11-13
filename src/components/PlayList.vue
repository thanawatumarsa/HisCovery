<template lang="html">
  <div class="playList">
  <div id="textmenu">
    PlayList
  </div>
  <div v-for="play in playlist">
    <lists-play-list :playlist = "playlist" :deleteplaylist = 'deleteplaylist' :index ="$index"></lists-play-list>
  </div>
</div>
</template>

<script>
import ListsPlayList from '../components/ListsPlayList'

export default {
  props: ['playlist', 'deleteplaylist'],
  data () {
    return {}
  },
  components: {
    ListsPlayList
  }
}
</script>

<style lang="css">
</style>
