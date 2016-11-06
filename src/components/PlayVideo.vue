<template lang="html">
  <youtube :video-id="video" :width="100%" @ended="end()" :player-vars="{autoplay: 1}"></youtube>
</template>

<script>
export default {
  props: ['video', 'end'],
  data () {
    return {
    }
  }
}
</script>
