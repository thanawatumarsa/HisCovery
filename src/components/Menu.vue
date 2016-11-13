<template lang="html">
    <div id="boxmenu">
  <div id="textmenu">
    Categories
  </div>
  <div id="menu">
    <button class="button3" @click="cateSearch(' cover')">Cover</button>
    <button class="button3" @click="cateSearch(' guitar')">Guitar</button>
    <button class="button3" @click="cateSearch(' drum')">Drum</button>
  </div>
</div>
</template>

<script>
export default {
  props: ['cate-search'],
  data () {
    return {
    }
  }
}
</script>

<style lang="css">
</style>
