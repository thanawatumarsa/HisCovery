<template lang="html">
  <div class="card" @click="select(list[index].id.videoId), toggleshow()">
      <div class="imgLink" >
        <img v-bind:src="list[index].snippet.thumbnails.medium.url" style="width : 100%;" >
      </div>
      <div class="nameLink" style="overflow: hidden;">
        {{ list[index].snippet.title }}<br>
    </div>
  </div>

</template>

<script>
export default {
  props: ['list', 'select', 'toggleshow', 'index'],
  data () {
    return {}
  }
}
</script>

<style lang="css">
</style>
