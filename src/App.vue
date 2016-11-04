<template lang="html">
  <link href="https://fonts.googleapis.com/css?family=Dosis" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css?family=Kanit" rel="stylesheet">
  <!-- <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.2.3/css/bulma.css">
  <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.2.3/css/bulma.css.map">
  <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.2.3/css/bulma.min.css">
  <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.2.3/css/bulma.min.css.map"> -->
  <div class="container">
    <header>
      <tool-bar :search = "search"></tool-bar>
    </header>
    <div id="centre">
      <div id="menu">
        <button class="button3">sdfsdf</button>
        {{ VideoId }}
      </div>
      <div id="center">
        <div id="video">
          <play-video :video = "VideoId" :end = "end"></play-video>
        </div>
      </div>
      <div id="playlists">
        <search-result :list = "list" :select = "select"></search-result>
      </div>
    </div>
  </div>
      <!-- <div>
      <search-result :list = "list" :select = "select"></search-result>
    </div> -->


  <!-- <div v-for="show in list">
    <youtube :video-id="show.id" @buffering="buffering()" @playing="playing()" @paused="pause()" @ended="end()" :player-vars="{autoplay: 1}"></youtube>
  </div><hr>
  <div v-for="show in playLists">
    <img v-bind:src="show.snippet.thumbnails.medium.url"><br>
    {{ show.snippet.title }}
    {{ $index }}
    <hr>
  </div> -->
</template>

<script>
import Vue from 'vue'
import VueYouTubeEmbed from 'vue-youtube-embed'
Vue.use(VueYouTubeEmbed)

import ToolBar from './components/ToolBar'
import PlayVideo from './components/PlayVideo'
import SearchResult from './components/SearchResult'

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
      defaultPL: 'cover'
    }
  },
  ready () {
    this.search(this.defaultPL)
  //  this.$http.get('/search?keyword=' + keyword).then(function (res) {})
    // this.getApi(this.num)
    // this.playList()
  },
  components: {
    ToolBar,
    PlayVideo,
    SearchResult
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
      this.$http.get('http://localhost:3000/search?keyword=' + keyword).then(function (res) {
        console.log(JSON.parse(res.body))
        vm.list = JSON.parse(res.body).items
      })
    },
    select (id) {
      // let source = `http://www.youtube.com/embed/${id}?autoplay=1`
      let source = id
      this.VideoId = source
      console.log(this.VideoId)
    }
  }
}
</script>

<style lang="css">

body {
  padding: 0;
  margin: 0;
  background-color: #1C1C1C;
  font-family: 'Dosis', 'Kanit';
  color: white;
}

#center {
  width: 60%;
  height: 100%;
  display: inline-block;
  align-items: center;
  text-align: center;
  background-color: #151515;
  margin-left: 86px;
}

div.container {
    width: 100%;
}

header {
  padding: 1em;
  color: white;
  background-color: black;
  border-bottom: 1px solid black;
  clear: left;
  text-align: left;
}

#menu {
  float: left;
  max-width: 50px;
  margin: 0;
  margin-right: 100px;
}

#centre {
  width: 100%;
  height: 100%;
  align-items: center;
}

#video {
  margin-top: 30px;
  margin-bottom: 30px;
}

#playlists {
  float: right;
  margin: 0;
  margin-top: 10px;
  margin-right: 50px;
  max-width: 356px;
  max-height: 850px;
  overflow-y:scroll;
  text-align: center;
}

input[type=text]{
  border-radius:10px;
  height: 20px;
  width: 200px;
  font-family: 'Dosis', 'Kanit';
}

.searchInput {
  border-radius: 25px;
}

.button3 {
  text-align: left;
  width: 240px;
  height: 50px;
  background-color: #1C1C1C;
  border: 0;
  font-family: 'Dosis', 'Kanit';
  font-size: 20px;
  color: white;
  transition: all 0.2s ease 0s;
}

.button3:hover {
    background-color: #404040;
}

::-webkit-scrollbar {
  width: 13px;
  height: 13px;
}
::-webkit-scrollbar-button {
  width: 0px;
  height: 0px;
}
::-webkit-scrollbar-thumb {
  background: #454545;
  border: 0px none #ffffff;
  border-radius: 50px;
}
::-webkit-scrollbar-thumb:hover {
  background: #353535;
}
::-webkit-scrollbar-thumb:active {
  background: #292929;
}
::-webkit-scrollbar-track {
  background: #1c1c1c;
  border: 0px none #ffffff;
  border-radius: 50px;
}
::-webkit-scrollbar-track:hover {
  background: #1c1c1c;
}
::-webkit-scrollbar-track:active {
  background: #1c1c1c;
}
::-webkit-scrollbar-corner {
  background: transparent;
}

</style>
