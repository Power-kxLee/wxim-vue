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
  import store     from './vuex';
  const apphao   = "1.191";
  const appGuide = "appGuidennumber"+apphao;
  let letappGuide = localStorage.getItem(appGuide)
  if(!letappGuide){
    localStorage.setItem(appGuide,apphao)
  }



  /**
   * [检查更新]
   */
  const checkupdate = (appVue) => {

      appVue.$http.get('http://a578242325.gicp.net:37009/checkupdates',{
          number:3000
      }).then(function(response){

          //检查当前app版本
           cordova.getAppVersion.getVersionNumber(function (version) {
              //console.log("版本号是",version);
              //比较最新版本
              if(version < response.body.version ){
                  //提示更新
                  navigator.notification.confirm(
                      '有版本更新\n更新了好多内容\n例如 ...', 
                       onConfirm,            
                      '检查更新',           
                      ['更新','暂时不更新']    
                  );
              }
          });
          //console.log("成功",response.body.version )

      },function(){
           //console.log("失败")
      })

      /**
       * [onConfirm 点击更新执行的函数]
       * @param  {[type]} buttonIndex [1是更新 2是不更新]
       * @return {[type]}             [null]
       */
      const onConfirm = (buttonIndex) => {
          if(buttonIndex == 1){
              download(cordova.file.externalDataDirectory+"cordova_bot.apk",encodeURI('http://a578242325.gicp.net:37009/leedeapp.apk'))
          }
      }
      /**
       * [getapp 打开文件]
       * @param  {[type]} filePath     [文件路径]
       * @param  {[type]} fileMIMEType [MIMA参数]
       * @return {[type]}              [null]
       */
      const getapp = (filePath,fileMIMEType) => {
          cordova.plugins.fileOpener2.open(
              filePath, 
              fileMIMEType, 
              { 
                  error : function(e) { 
                      //console.log(e,"失败")
                  },
                  success : function () {
                      //console.log('file opened successfully');                
                  }
              }
          );
      }
      /**
       * [download 下载文件]
       * @param  {[type]} fileEntry [本地储存路径]
       * @param  {[type]} uri       [下载链接]
       * @return {[type]}           [null]
       */
      const download = (fileEntry,uri) =>{
          
          var fileTransfer = new FileTransfer();
          var fileURL = fileEntry;
          //console.log("开始请求下载")
          fileTransfer.onprogress = showUploadingProgress;  
          navigator.notification.progressStart("提醒", "当前下载进度");  

          fileTransfer.download(
              uri,
              fileURL,
              function (entry) {
                  navigator.notification.progressStop();  
                  //console.log("Successful download...",entry);
                  //console.log("download complete: " + entry.toURL());
                  alert("好吧,其实更新了也没东西,我就是做功能测试,不要点击安装哦。。")
                  cordova.plugins.fileOpener2.open(
                      entry.toURL(), 
                      'application/vnd.android.package-archive', 
                      { 
                          error : function(e) { 
                              //console.log(e,"失败")
                          },
                          success : function () {
                              //console.log('file opened successfully');                
                          }
                      }
                  );
              },
              function (error) {
                  //console.log("download error source " + error.source);
                  //console.log("download error target " + error.target);
                  //console.log("upload error code" + error.code);
                  navigator.notification.progressStop("");  
                  alert("下载错误,错误代码"+error.code+",请联系管理员")
              },  
              false, // or, pass false
              {
                  /*headers: {
                      "Authorization": "Basic dGVzdHVzZXJuYW1lOnRlc3RwYXNzd29yZA=="
                  }*/
              }
          );

      }


      //下载进度条
      const showUploadingProgress = (progressEvt) => {  
          if (progressEvt.lengthComputable) {  
              navigator.notification.progressValue(Math.round((progressEvt.loaded / progressEvt.total) * 100));  
          }  
      }  
  }
  /**
   * [获取地址]
   */
  const getlocation = (appVue) => {

      var BDmap = {
          ak : "zYezC609to7ASqOQGoEl175QwcaenZK1", //百度ak
          location:"", //坐标
          output:"json", //返回的格式
      }
      var BDurl = "http://api.map.baidu.com/geocoder/v2/?"
      navigator.geolocation.getCurrentPosition(function(position){
          
          
          var coords = position.coords.longitude+","+position.coords.latitude;
          //console.log("coords",coords)
          appVue.$http.get('http://api.map.baidu.com/geoconv/v1/?coords='+coords+'&from=1&to=5&ak='+BDmap.ak+'').then(function(data){

              var location = data.body.result[0].y+","+data.body.result[0].x;

              //console.log("坐标转化",location)

              appVue.$http.get('http://api.map.baidu.com/geocoder/v2/?output='+BDmap.output+'&location='+location+'&ak='+BDmap.ak+'').then(function(data){
                  //console.log("地址是",data)
                  alert("你的地址在"+data.body.result.formatted_address + data.body.result.sematic_description)
                  //console.log("你的地址在",data.body.result.formatted_address + data.body.result.sematic_description)
              });
      

          
          }, function(){
              alert('code: '    + error.code    + '\n' + 'message: ' + error.message + '\n');
          });
      });
  }


  /**
   * [推送消息]
   */
  const localts = () => {

    cordova.plugins.notification.local.schedule({
        title:'惊人！如此的厉害！！',
        text: '欢迎你来到我的app,随便看随便看',
        icon:'icon',
        smallIcon:  'file://small.png'
    }); 
    cordova.plugins.notification.local.on("click", function (notification) {
        alert("竟然你想看看,那就赶紧来吧")
        //console.log(notification)
    });
  }


  /**
   * [checkConnection 检查网络状态]
   * @return {[string]} [返回网络状态]
   */
  const checkConnection = ()  => {
      var networkState = navigator.connection.type;

      var states = {};
      states[Connection.UNKNOWN]  = '未知网络连接';
      states[Connection.ETHERNET] = '以太网连接';
      states[Connection.WIFI]     = 'WIFI连接';
      states[Connection.CELL_2G]  = '2G网络连接';
      states[Connection.CELL_3G]  = '3G网络连接';
      states[Connection.CELL_4G]  = '4G网络连接';
      states[Connection.CELL]     = '电池通用连接';
      states[Connection.NONE]     = '没有网络';

      return states[networkState];
  }

  

  const onOffline = () => {
     alert("没有网络,舍不得上网就别打开我的app 谢谢")
  }
  const cordovainit = () => {
    if(!cordova.plugins){
      throw "你没有打包,那当然不能使用cordova啦~~不用管我";
      return false;
    }

    document.addEventListener("deviceready", (d) => {

        //console.log("cordova加载完成")
        localts(); //推送消息
        checkupdate(this); //检查更新
        getlocation(this); //获取地址

        alert("你当前的网络是"+checkConnection())
        document.addEventListener("offline", onOffline, false);

    }, false);
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
      }
    },
    methods:{
      changenextchild(){
        this.apphao = 0;
        localStorage.setItem(appGuide,0);
        cordovainit();
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
      }
    },
    mounted (){
      //初始的时候,如果是引导页面,则不执行cordova的插件
      !this.pageinit && cordovainit();
    }
  };
</script>
<style type="text/css" scoped>
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