<template lang="html">
    <div id="boxmenu">
  <div id="textmenu">
    Categories
  </div>
  <div id="menu">
    <button class="button3" @click="search(' cover')">Cover</button>
    <button class="button3" @click="search(' guitar')">Guitar</button>
    <button class="button3" @click="search(' drum')">Drum</button>
  </div>
</div>
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
