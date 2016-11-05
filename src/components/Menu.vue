<template lang="html">
  <button class="button3" @click="search(' sing')">Cover</button>
  <button class="button3" @click="search(' guitar')">Guitar</button>
  <button class="button3" @click="search(' drum')">Drum</button>
</template>

<script>
export default {
  props: ['search'],
  data () {
    return {
    }
  }
}
</script>

<style lang="css">
</style>
