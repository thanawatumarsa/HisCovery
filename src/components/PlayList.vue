<template lang="html">
  <div class="playList">
  <div id="textmenu">
    PlayList
  </div>
  <div class="play" v-if="playlist !== null">
    <button type="button" class="playButt" name="button" @click="selectplaylist(playlist[0].id.videoId), toggleshowplay()">PLAY</button>
  </div>
  <div v-for="play in playlist">
    <lists-play-list :playlist = "playlist" :deleteplaylist = 'deleteplaylist' :index ="$index" :showpl = "showpl" :showplaylist = "showplaylist"></lists-play-list>
  </div>
</div>
</template>

<script>
import ListsPlayList from '../components/ListsPlayList'

export default {
  props: ['playlist', 'deleteplaylist', 'toggleshow', 'selectplaylist', 'toggleshowplay'],
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
