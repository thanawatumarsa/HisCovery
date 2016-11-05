<template lang="html">
  <link href="https://fonts.googleapis.com/css?family=Dosis" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css?family=Kanit" rel="stylesheet">
  <header>
    <tool-bar :search = "search"></tool-bar>
  </header>
  <div class="columns">
  <div class="column">
    <div id="boxmenu">
      <div id="textmenu">
        categories
      </div>
      <div id="menu">
        <menu :search = "cateSearch"></menu>
      </div>
    </div>
  </div>
  <div class="column">
  </div>
  <div class="column">
    <div id="video">
      <play-video :video = "VideoId" :end = "end"></play-video>
    </div>
    <hr>
  </div>
  <div class="column">
  </div>
  <div class="column">
    <div id="playlists">
      <search-result :list = "list" :select = "select"></search-result>
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
      frontURL: 'https://www.googleapis.com/youtube/v3/videos?id=',
      backURL: '&key=AIzaSyCv5kAeAHgj-9uBTBoUv0-92IH_fhmbPTg&fields=items&part=snippet',
      list: [],
      list2: [],
      playLists: [],
      player: '',
      youtubeID: [
        'mZ3Xr_JZw8Y',
        'GewsE7gFDr4',
        'IIAevTRWJ04',
        'W0j3f4jUyk4',
        'VXXKeMNSxKY',
        'fEFkUk_3p9M'
      ],
      num: 0,
      VideoId: 'Pi8xsZXibIc',
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
    // getApi (number) {
    //   var url = this.frontURL + this.youtubeID[number] + this.backURL
    //   this.$http.get(url).then(function (res) {
    //     this.list = res.data.items
    //     console.log(res.data)
    //   })
    // },
    // playList () {
    //   var url = ''
    //   var vm = this
    //   for (let i = 0; i < this.youtubeID.length; i++) {
    //     console.log(this.youtubeID[i])
    //     url = this.frontURL + this.youtubeID[i] + this.backURL
    //     this.$http.get(url).then(function (res) {
    //       vm.playLists.push(res.data.items[0])
    //       console.log(res.data.items[0].snippet.title)
    //       // i++w
    //     })
    //   }
    // },
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
  height: 100%;
  font-family: 'Dosis', 'Kanit';
  background-color: #181818;
}


#center {
  margin-top: 30px;
  margin-bottom: 30px;
  display: inline-block;
  width: 60%;
  text-align: center;
}

header {
  width: 100%;
  padding: 1em;
  color: white;
  margin-top: -10px;
  margin-left: -10px;
  background-color: #282828;
  overflow: hidden;
  text-align: left;
}

#main div {
   flex: 1;
}

#textmenu {
  padding: 20px 25px;
  font-family: 'Dosis', 'Kanit';
  font-size: 25px;
  color: white;
}

#boxmenu {
  background-color: #212121;
  height: 100%;
  width: 100%;
  margin-left: -8px;
  margin-top: 1px;
}

#menu {
  width: 100%;
  margin-top: 10px;
  float: left;
  background-color: #212121;
}

#video {
  margin-top: 30px;
  margin-bottom: 30px;
  width: 100%;
}


#playlists {
  height: 92.9vh;
  margin-top: 1px;
  margin-right: -8px;
  margin-bottom: -8px;
  overflow-y:scroll;
  text-align: center;
  background-color: #212121;
}

input[type=text]{
  padding: 6px 12px;
  border-radius:10px;
  height: 20px;
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

</style>
