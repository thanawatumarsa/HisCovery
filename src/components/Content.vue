<template lang="html">
  <div class="content">
    <div class="video-container"  v-if="!show">
      <youtube :video-id="video" player-width="560" align="center" @ended="end()" :player-vars="{autoplay: 1}"></youtube>
    </div>
    <search-result :list = "list" :select = "select" :toggleshow = "toggleshow" v-if="show"></search-result>
  </div>
</template>

<script>
import SearchResult from '../components/SearchResult'

export default {
  props: ['video', 'end', 'list', 'select', 'show', 'toggleshow'],
  data () {
    return {
    }
  },
  components: {
    SearchResult
  }
}
</script>
