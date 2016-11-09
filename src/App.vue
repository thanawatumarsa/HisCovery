<template lang="html">
  <link href="https://fonts.googleapis.com/css?family=Dosis" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css?family=Kanit" rel="stylesheet">
  <div class="top">
    <div id="header">
      <tool-bar :search = "search"></tool-bar>
    </div>
  </div>

    <div class="columns is-desktop">
    <div class="column is-2 is-offset-1">

      <div id="boxmenu">
        <div id="textmenu">
          Categories
        </div>
        <div id="menu">
          <menu :search = "cateSearch"></menu>
        </div>
      </div>
    </div>

    <div class="column is-6 is-offset-0">

      <div class="content">
        <div class="video-container">
            <play-video :video = "VideoId" :end = "end"></play-video>
        </div>
      </div>
    </div>

    <div class="column is-2 is-offset-0">

      <div id="list">
        <div id="textmenu">
          PlayList
        </div>
        <div id="playlists">
          <search-result :list = "list" :select = "select"></search-result>
        </div>
      </div>
    </div>
  </div>


</template>

<script>
import Vue from 'vue'
import VueYouTubeEmbed from 'vue-youtube-embed'
Vue.use(VueYouTubeEmbed)

import ToolBar from './components/ToolBar'
import PlayVideo from './components/PlayVideo'
import SearchResult from './components/SearchResult'
import Menu from './components/Menu'

export default {
  data () {
    return {
      list: [],
      playLists: [],
      num: 0,
      VideoId: 'WNKyppxHCdw',
      defaultPL: 'cover',
      keyTemp: ''
    }
  },
  ready () {
    this.search(this.defaultPL)
  },
  components: {
    ToolBar,
    PlayVideo,
    SearchResult,
    Menu
  },
  methods: {
    end () {
      console.log('end')
    },
    search (keyword) {
      let vm = this
      this.$http.get('http://localhost:3000/search?keyword=' + keyword + 'cover').then(function (res) {
        console.log(JSON.parse(res.body))
        vm.list = JSON.parse(res.body).items
        this.keyTemp = keyword
      })
    },
    cateSearch (keysearch) {
      let vm = this
      this.$http.get('http://localhost:3000/search?keyword=' + this.keyTemp + keysearch).then(function (res) {
        console.log(JSON.parse(res.body))
        vm.list = JSON.parse(res.body).items
      })
    },
    select (id) {
      let source = id
      this.VideoId = source
      console.log(this.VideoId)
    }
  }
}
</script>

<style lang="css">

body {
  padding: 0px;
  margin: 0px;
  height: 100%;
  width: 100%;
  font-family: 'Dosis', 'Kanit';
  background-color: #181818;
}


.top {
  padding: 0;
  margin: 0px;
  width: 100%;
  height: 50px;
  color: white;
  background-color: #282828;
  text-align: left;
}

#header {
  padding: 12px 10%;
}

#main div {
   flex: 1;
}

#textmenu {
  padding: 20px 35px;
  font-family: 'Dosis', 'Kanit';
  font-size: 25px;
  color: white;
}

#boxmenu {
  background-color: #212121;
  width: 100%;
  margin-top: 10px;
  padding-bottom: 20px;
  border-radius: 3px;
}

#menu {
  width: 100%;
  margin-top: 10px;
  background-color: #212121;
}

#video {
  margin-bottom: 30px;
  width: 100%;
  text-align: center;
}

.content {
  background-color: #212121;
  margin-top: 10px;
  text-align: center;
  overflow: hidden;
  border-radius: 3px;
}

#list {
  margin-top: 10px;
  background-color: #212121;
  height: 100%;
  width: 100%;
  border-radius: 3px;
}

#playlists {
  margin-top: 10px;
  height: 80vh;
  width: 100%;
  overflow-y:scroll;
  text-align: center;
  padding-right:0px;
  background-color: #212121;
}

input[type=text]{
  padding: 6px 12px;
  border-radius:10px;
  height: 10px;
  width: 200px;
  font-family: 'Dosis', 'Kanit';
}

.searchInput {
  border-radius: 25px;
}

.button3 {
  padding: 0px 30px;
  text-align: left;
  width: 100%;
  height: 50px;
  background-color: #212121;
  border: 0;
  font-family: 'Dosis', 'Kanit';
  font-size: 20px;
  color: white;
  transition: all 0.2s ease 0s;
}

.button3:hover {
    background-color: #404040;
}

.video-container {
  position: relative;
  padding-bottom: 56.25%;
  padding-top: 25px;
  margin-top: 43px;
  margin-bottom: 43px;
}

.video-container iframe {
	position:absolute;
	top:0;
	left:5%;
	width:90%;
	height:100%;
}


</style>
