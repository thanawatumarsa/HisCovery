<template lang="html">
  <div class="card" >
      <div @click="select(list[index].id.videoId), toggleshow()">
        <img class="imgLink" v-bind:src="list[index].snippet.thumbnails.medium.url" >
      </div>
      <div class="nameLink">
        {{ list[index].snippet.title }}<br>
    </div>
    <div class="addPlaylist">
      <button class="addButt" name="button" @click="pl(list[index])">+ เพิ่มลง Playlist</button>
    </div>
  </div>

</template>

<script>
export default {
  props: ['list', 'select', 'toggleshow', 'index', 'pl', 'showplaylist', 'showpl'],
  data () {
    return {}
  }
}
</script>

<style lang="css">
</style>
