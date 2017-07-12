<template>
  <div id='app'>
    
    <guiance-page v-if='pageinit' v-on:changenext='changenextchild'></guiance-page>

    <transition :name="transitionName"  v-if='!pageinit'>
    <router-view class='appviews'  ></router-view>
    </transition>
    
  </div>
</template>

<script type="text/javascript">
import "./assets/font/xwim/common/iconfont.css";
import './assets/css/common/common.css'; //加载公共css
import './assets/css/common/HTML5-reset.css'; //加载css reste表
import 'mint-ui/lib/style.css'; //加载mint依赖的css
import * as types from './vuex/mutation-types';
import imFooter from './view/xwim/common/footer.vue';
import imHeader from './view/xwim/common/header.vue';
import guiancePage from './view/xwim/guidancePage.vue';
import store     from './vuex';
const apphao   = "1.191";
const appGuide = "appGuidennumber"+apphao;
let letappGuide = localStorage.getItem(appGuide);
if(!letappGuide){
  localStorage.setItem(appGuide,apphao);
}

  
  export default {
    data () {
      return {
        transitionName: 'bounce-in',
        apphao:apphao
      };
    },
    store,
    components:{
      imFooter,
      imHeader,
      guiancePage
    },
   
    watch: {
      '$route' (to, from) {

        var direction = this.$store.state.direction;
        this.transitionName = direction == "reverse" ? 'bounce-out' : 'bounce-in';
      }
    },
    methods:{
      changenextchild(){
        this.apphao = 0;
        localStorage.setItem(appGuide,0);
      },
      logoufn (){
        this.$router.push({
          path : "/"
        });
        localStorage.setItem(types.CHECK_LOGIN_STATUS,false);
        this.$store.commit(types.CHECK_LOGIN_STATUS);
      }
    },
    computed:{
      componentName (){

        const $route = this.$route;
        //console.log($route)
        return !!$route.name ? $route.name : $route.path;
      },
      headeranimate (){
        const $route = this.$route;
        return $route.meta.showHeader;
      },
      title (){
        return this.componentName;
      },
      pageinit (){
        ////console.log("letappGuide",letappGuide)
        return letappGuide == this.apphao;
      },
      checklogin (){
        //console.log(this.$store.state.loginstart)

        return this.$store.state.loginstart ;
      }
    },
    mounted (){
      //初始的时候,如果是引导页面,则不执行cordova的插件
    }
  };
</script>
<style type="text/css" >
.logoubox{
    position: fixed;
    top: 0;
    right: 100px;
    z-index: 9999;
    font-size: 12px;
}
.logoubox button{
  font-size: 12px;
  background: rebeccapurple;
}
.many_conetnt {
      position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    min-height: 100%;
    padding-top: 50px;
  }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;  
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  	padding: 0;
  	margin:0;
    min-height: 100%;
  }


  .appviews{
    position: absolute;
    left: 0;
    width: 100%;
    min-height: 100%;
  }
  .notindex{
    top:40px;
  }

  .bounce-out-enter-active {
    animation: boun-in-left .4s;
  }
  .bounce-out-leave-active { 
    animation: boun-out-right .4s;
  }
  .bounce-in-enter-active {
  animation: boun-in-right .4s;
  }
  .bounce-in-leave-active {
    animation: boun-out-left .4s;
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