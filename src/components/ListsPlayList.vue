<template lang="html">
  <div class="cardPlaylist">
    {{ playlist[index].index}}
    <div class="imgPL">
    <img v-bind:src="playlist[index].snippet.thumbnails.default.url" style="width : 100%; height : 100%;" >
  </div>
  <button type="button" class="del" @click="deleteplaylist(index)" name="button">x</button>
  <div class="namePL">
    {{ playlist[index].snippet.title }}<br>
</div>
  </div>
</template>

<script>
export default {
  props: ['playlist', 'deleteplaylist', 'index'],
  data () {
    return {}
  }
}
</script>

<style lang="css">
</style>
