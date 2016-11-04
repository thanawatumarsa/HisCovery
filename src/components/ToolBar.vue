<template>
  <input type="text" v-model="keyword" @keyup.enter='search(keyword)'>
</template>

<script>
export default {
  props: ['search'],
  data () {
    return {
      keyword: ''
    }
  }
}
</script>
