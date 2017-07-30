import 'babel-polyfill';
import Vue from 'vue' //加载vue
import MintUI from 'mint-ui' //加载mint-ui框架
import VueRouter from 'vue-router' //加载vue路由
import axios from 'axios' //加载http请求的
import { sync } from 'vuex-router-sync'
import store from './vuex' // 初始vuex
import * as types from './vuex/mutation-types'
import FastClick from 'fastclick' //消除点击延迟

import App from './App.vue' //加载路由中间模版
import routes from './route.js' //加载路由器模版
import VueSocketio from 'vue-socket.io';
import server from './server_data';

FastClick.attach(document.body);
Vue.use(VueRouter);
Vue.use(VueSocketio, server.url);
Vue.use(MintUI); //调用使用


Vue.prototype.$ajax = axios; //将axios改写为vue原型属性
window.axios = axios;

//保存路由
window.router = new VueRouter({
    routes
});
window.AppStore = store;

let history = window.sessionStorage; //创建本地储存(PS:sessionStorage在页面关闭时候清除)
history.clear(); //删除所有保存的数据
let historyCount = history.getItem('count') * 1 || 0; //从count获取数据 不存在就设置为0, 为 路层级标识
history.setItem('/', 0); //默认设置首页层级标识为0





/**
 * [commit description]
 * forward: 进入新路由的动画
 * reverse：退出路由的动画
 * @type {[type]}
 */
const commit = store.commit;

commit(types.CHECK_LOGIN_STATUS);


const pagingfn = (to, from) => {
    const toIndex = history.getItem(to.path); //进入哪个路由
    const fromIndex = history.getItem(from.path); //从哪个路由进来的

    if (toIndex) {

        // 初始进入路由都有层级标识.逻辑如下:
        // 新进入的路由层级标识肯定比旧的路由大 所以可以知道是进入 就改变成进入的效果
        // 退出的时候 反之就是离开
        if (toIndex >= fromIndex || !fromIndex) {
            //那么就把页面的访问效果设置成forward,进入的效果
            commit(types.UPDATE_DIRECTION, 'forward')

        } else {
            //否则就是返回的效果

            commit(types.UPDATE_DIRECTION, 'reverse')
        }

    } else { //路由没有访问过的话
        if(to.meta.mark){
            historyCount = to.meta.mark;
        }else{

            ++historyCount; //标识往上+1 
        }
        //如果进来的路由不是首页,那么通过history方法.以路由路径为key,和路层级标识为value保存起来
        //比如'/wx'这个路由的标识就是1
        to.path !== '/' && history.setItem(to.path, historyCount); 
        //通过vuex的update_direction方法更新路由进入的动画
        commit(types.UPDATE_DIRECTION, 'forward'); 

    }

    commit(types.MAKE_PAGE, to.name);
};

/**
 * [监听全局路由,准备进入路由前的操作]
 * @param  {[type]}   to  [进入新路由的数据]
 * @param  {[type]}   form  [离开路由的数据]
 */
router.beforeEach((to, from, next) => {
    //路由配置了requireAuth,true:需要登录,false:不需要登录
    if (to.matched.some(record => record.meta.requireAuth)) { 
        //loginstart:判断登录状态默认为false未登录,true:登录
        if (store.state.loginstart) { 
            pagingfn(to, from);

            next();
        } else {
            //如果未登录跳到登录页面
            return next({
                path: '/login'
            });
                    
        }
    } else {
        
        //loginstart为true并loginInCheckIndex为true .那么就直接跳回去进来的路由
        //这种情况处理业务比如: 登录后又想重新进去注册或者登录页面 那么就跳出去
        if (to.matched.some(record => record.meta.loginInCheckIndex) && store.state.loginstart) {
            return next({
                path: from.fullPath
            });
        } else {
            //页面不需要登录了直接执行转跳
            pagingfn(to, from);
            next();
        }
    }

});



commit(types.UPDATE_DIRECTION, 'reverse')

//成功进入新页面之后
router.afterEach((to, from) => {
    Vue.nextTick(() =>{
        let $layout_body = document.getElementById("layout_body");
        if($layout_body){
            $layout_body.scrollTop = 0
        }
    });
});
//保存路由,方便后面调用
commit(types.SAVE_ROUTER, router);


sync(store, router);

window.appVue = new Vue({
    el: '#app',
    render: h => h(App),
    router
});