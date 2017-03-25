<template>
  <div id='app'>
    <guiance-page v-if='pageinit' v-on:changenext='changenextchild'></guiance-page>
    <app-header  v-if='headeranimate && !pageinit' :titlename='title'></app-header>
    <transition :name="transitionName"  v-if='!pageinit'>
    <router-view class='appviews'  ></router-view>
    </transition>


  </div>
</template>

<script type="text/javascript">
  import './assets/css/common/common.css' //加载公共css
  import './assets/css/common/HTML5-reset.css' //加载css reste表
  import 'mint-ui/lib/style.css' //加载mint依赖的css
  import appHeader from './view/common/app-header.vue';
  import guiancePage from './view/page/guidancePage.vue';
  import store     from './vuex/store.js';

  const apphao   = "1.186";
  const appGuide = "appGuide"+apphao;
  let letappGuide = localStorage.getItem(appGuide)
  if(!letappGuide){
    localStorage.setItem(appGuide,apphao)
  }
  export default {
    data () {
      return {
        transitionName: 'bounce-in',
        apphao:apphao
      }
    },
    store,
    components:{
      appHeader,
      guiancePage
    },
    
    watch: {
      '$route' (to, from) {

        var direction = this.$store.state.direction;
        this.transitionName = direction == "reverse" ? 'bounce-out' : 'bounce-in';
       // console.log(this.transitionName)
      }
    },
    methods:{
      changenextchild(){
        this.apphao = 0;
        localStorage.setItem(appGuide,0)
      }
    },
    computed:{
      componentName (){

        const $route = this.$route;
        console.log($route)
        return !!$route.name ? $route.name : $route.path;
      },
      headeranimate (){
        const $route = this.$route;
        return !!$route.name && $route.name != "index";
      },
      title (){
        return this.componentName;
      },
      pageinit (){
      
        return letappGuide == this.apphao;
      }
    }
  };
</script>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
	padding: 0px;
	margin:0px;
  
}


.appviews{
  position: absolute;
  left: 0px;
  width: 100%;

}
.notindex{
  top:40px;
}

.bounce-out-enter-active {
  animation: boun-in-left .5s;
}
.bounce-out-leave-active { 
  animation: boun-out-right .5s;
}
.bounce-in-enter-active {
animation: boun-in-right .5s;
}
.bounce-in-leave-active {
  animation: boun-out-left .5s;
}
@keyframes boun-in-left {
  0% {
    transform: translate3d(-100%, 0, 0);
  }
 
  100% {
    transform: translate3d(0, 0, 0);
  }
}
@keyframes boun-out-left {
   0% {
    transform: translate3d(0, 0, 0);
  }
 
  100% {
    transform: translate3d(-100%, 0, 0);
  }
}
@keyframes boun-in-right {
  0% {
    transform: translate3d(100%, 0, 0);
  }
 
  100% {
    transform: translate3d(0, 0, 0);
  }
}
@keyframes boun-out-right {
   0% {
    transform: translate3d(0, 0, 0);
  }
 
  100% {
    transform: translate3d(100%, 0, 0);
  }
}
</style>