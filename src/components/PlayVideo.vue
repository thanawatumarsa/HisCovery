<template lang="html">
  <youtube :video-id="video" @ended="end()" :player-vars="{autoplay: 0}"></youtube>
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
