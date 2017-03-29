import Vue         from 'vue'  //加载vue
import MintUI      from 'mint-ui' //加载mint-ui框架
import VueRouter   from 'vue-router' //加载vue路由
import VueResource from 'vue-resource'  //加载vue的http请求的
import { sync }    from 'vuex-router-sync'
import store       from './vuex/store'// 初始vuex
import FastClick   from 'fastclick' //消除点击延迟

import App         from './App.vue' //加载路由中间模版
import routes      from './route.js' //加载路由器模版
import Cordova     from '../platforms/android/assets/www/cordova.js'



FastClick.attach(document.body)

Vue.use(MintUI) //调用使用
Vue.use(VueRouter)
Vue.use(VueResource)

//保存路由
window.router = new VueRouter({
  routes,
  scrollBehavior (to , from , savedPosition){
    console.log("text,top",to)
  }
})

window.AppStore = store;

let history = window.sessionStorage; //创建本地储存(PS:sessionStorage在页面关闭时候清除)
history.clear();//删除所有保存的数据
let historyCount = history.getItem('count') * 1 || 0; //从count获取数据 不存在就设置为0, 为 路层级标识
console.log("history.getItem('count')",history.getItem('count'))
history.setItem('/', 0);  //在创建一个'/' 并设置为0





// 进入新路由的时候,做的一些操作
const commit = store.commit ;
const pagingfn = (to, from) => {
  const toIndex = history.getItem(to.path); //进入哪个路由
  const fromIndex = history.getItem(from.path); //从哪个路由进来的
  if(toIndex){
                
      // 如果这个路由已经访问过,并是进来的路由的子路由 或者 
      if (toIndex > fromIndex || !fromIndex) {
        //那么就把页面的访问效果设置成forward,进入的效果
        commit('update_direction', 'forward')

      } else {
        //否则就是返回的效果

        commit('update_direction', 'reverse')
      }

    }else{ //理由没有访问过的话
      ++historyCount;  //hfc 往上+1 
      commit('update_direction', 'forward'); //通过vuex的update_direction方法更新路由进入的效果
      to.path !== '/' && history.setItem(to.path, historyCount); //如果进来的路由不是首页,那么通过history方法.以路由路径为key,和路层级标识为value保存起来
    }

    commit("makePage",to.name);
}
router.beforeEach((to, from, next) => {
      console.log("to",to.path,to,to.matched.some(record => record.meta.requireAuth))

      if (to.matched.some(record => record.meta.requireAuth)) {  // 判断该路由是否需要登录权限

        if (store.state.loginstart) {  // 通过vuex state获取当前的token是否存在
            pagingfn(to, from);
            next();
        }else {
          commit("checkLoginStart",true)

          return next({
              path: '/login'
          })
        }
      }else{
        pagingfn(to, from);
        next();
      }
    
});




commit('update_direction', 'reverse')

//成功进入新页面之后
router.afterEach((to,from) => {
  window.scrollTo(0,0);
});
//保存路由,方便后面调用
commit("saveRouter",router);


sync(store, router);

window.appVue = new Vue({
  el     : '#app',
  render : h => h(App),
  router
});



