<template lang="html">
  <link href="https://fonts.googleapis.com/css?family=Catamaran" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css?family=Kanit" rel="stylesheet">
  <div class="top">
    <div id="header">
      <tool-bar :search = "search"></tool-bar>
    </div>
  </div>
  <div class="columns is-desktop">
    <div class="column is-2 is-offset-1">
      <menu :cate-search = "cateSearch"></menu>
    </div>
    <div class="column is-6 is-offset-0">
      <content :toggleshow = "toggleShow" :show = "show" :list = "list" :select = "select" :video = "VideoId" :end = "end" :pl = "addPlayList"></content>
    </div>
    <div class="column is-2 is-offset-0">
      <play-list :playlist = "playLists" :deleteplaylist = "deletePlayList"></play-list>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import VueYouTubeEmbed from 'vue-youtube-embed'
Vue.use(VueYouTubeEmbed)
import ToolBar from './components/ToolBar'
import Content from './components/Content'
import Menu from './components/Menu'
import PlayList from './components/PlayList'

export default {
  data () {
    return {
      list: [],
      playLists: [],
      VideoId: '',
      defaultPL: 'cover',
      keyTemp: '',
      show: true
    }
  },
  ready () {
    this.search(this.defaultPL)
  },
  components: {
    ToolBar,
    Content,
    Menu,
    PlayList
  },
  methods: {
    toggleShow () {
      this.show = !this.show
    },
    end () {
      console.log('end')
    },
    search (keyword) {
      let vm = this
      this.$http.get('http://localhost:3000/search?keyword=' + keyword + ' cover').then(function (res) {
        // console.log(JSON.parse(res.body))
        vm.list = JSON.parse(res.body).items
        this.keyTemp = keyword
        this.show = true
      })
    },
    cateSearch (keysearch) {
      let vm = this
      this.$http.get('http://localhost:3000/search?keyword=' + this.keyTemp + keysearch).then(function (res) {
        vm.list = JSON.parse(res.body).items
        this.show = true
      })
    },
    select (id) {
      let source = id
      this.VideoId = source
    },
    addPlayList (pl) {
      let vm = this
      vm.playLists.push(pl)
      console.log(vm.playLists)
    },
    deletePlayList (index) {
      console.log(index)
      let vm = this
      vm.playLists.splice(index, 1)
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
  font-family: 'Catamaran', 'Kanit';
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
  font-family: 'Catamaran', 'Kanit';
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

.playList {
  width: 100%;
  height: 60vh;
  margin-top: 10px;
  overflow-y:scroll;
  align-items: center;
  padding-right:0px;
  background-color: #212121;
}

.content {
  background-color: #212121;
  margin-top: 10px;
  align-items: center;
  overflow: hidden;
  border-radius: 3px;
}

#list {
  margin-top: 10px;
  background-color: #212121;
  height: 85vh;
  width: 100%;
  align-items: center;
  border-radius: 3px;
}

#playlists {
  margin-top: 10px;
  height: 83.5vh;
  width: 100%;
  overflow-y:scroll;
  align-items: center;
  padding-right:0px;
  background-color: #212121;
}

input[type=text]{
  padding: 6px 12px;
  border-radius:10px;
  height: 10px;
  width: 200px;
  font-family: 'Catamaran', 'Kanit';
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
  font-family: 'Catamaran', 'Kanit';
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

.card {
  width: 90%;
  margin-top: 15px;
  margin-bottom: 15px;
  margin-left: 5%;
  background-color: #666666;
  overflow: hidden;
  border-radius: 4px;
  transition: all 0.2s ease 0s;
}

/*.card:hover {
  background-color: #999999;
  box-shadow: 15px 10px 25px 0 rgba(0,0,0,0.2);
}*/

.cardPlaylist {
  width: 90%;
  margin-top: 15px;
  margin-bottom: 15px;
  margin-left: 5%;
  background-color: #666666;
  overflow: hidden;
  border-radius: 4px;
  transition: all 0.2s ease 0s;
}

/*.cardPlaylist:hover {
  background-color: #999999;
  box-shadow: 15px 10px 25px 0 rgba(0,0,0,0.2);
}*/

.imgLink {
  float: left;
  padding-bottom: -6px;
  width: 30%;
  height: 13.4vh auto;
  margin-top: 15px;
  margin-left: 15px;
  margin-right: 5px;
  margin-bottom: 15px;
}

.imgPL {
  float: left;
  padding-bottom: -6px;
  width: 40%;
  height: 13.4vh auto;
  margin-top: 15px;
  margin-left: 15px;
  margin-right: 5px;
  margin-bottom: 15px;
}

.nameLink {
  width: 60%;
  max-height: 30px;
  font-size: 100%;
  margin-top: 15px;
  margin-right: 5px;
  margin-bottom: 15px;
  float: right;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: '...?';
}

.namePL {
  width: 50%;
  height: 50px;
  font-size: 90%;
  margin-top: 15px;
  margin-right: 5px;
  margin-bottom: 15px;
  overflow: hidden;
  text-overflow: '...?';
}

.del {
  margin-top: 5px;
  margin-right: 5px;
  margin-bottom: 5px;
  border-radius: 3px;
  width: 20px;
  height: 20px;
  border: 0;
  box-shadow: 2px 2px 5px;
  text-align: center;
  float: right;
  transition: all 0.2s ease 0s;
}

.del:hover {
  background-color: #ff4d4d;
}

.addPlaylist {
  width: 60%;
  height: 50px;
  margin-right: 5px;
  margin-top: 3%;
  margin-bottom: 5px;
  float: right;

}

.addButt {
  font-family: 'Catamaran', 'Kanit';
  width: 150px;
  height: 30px;
  border-radius: 3px;
  margin-right: 50px;
  background-color: #0086b3;
  float: right;
  border: 0;
  transition: all 0.2s ease 0s;
  box-shadow: 2px 2px 5px;
}

.addButt:hover {
    background-color: #00ace6;
}

::-webkit-scrollbar {
  width: 2px;
  height: 2px;
}
::-webkit-scrollbar-button {
  width: 0px;
  height: 0px;
}
::-webkit-scrollbar-thumb {
  background: #e1e1e1;
  border: 0px none #ffffff;
  border-radius: 50px;
}
::-webkit-scrollbar-thumb:hover {
  background: #ffffff;
}
::-webkit-scrollbar-thumb:active {
  background: #000000;
}
::-webkit-scrollbar-track {
  background: #666666;
  border: 0px none #ffffff;
  border-radius: 50px;
}
::-webkit-scrollbar-track:hover {
  background: #666666;
}
::-webkit-scrollbar-track:active {
  background: #333333;
}
::-webkit-scrollbar-corner {
  background: transparent;
}

</style>
