<template lang="html">
  <youtube :video-id="video" player-width="560" align="center" @ended="end()" :player-vars="{autoplay: 1}"></youtube>
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
