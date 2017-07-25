import Vue from 'vue';
import Vuex from 'vuex';
import * as types from './mutation-types';
import Server from "../server_data";
Vue.use(Vuex);

// 使用 vuex.commit("fn") 触发函数更改状态
const state = {
  count: 0,
  direction: 'forward', //作为进入新页面还是返回新页面 做依据
  router:{},
  pageName:"index",
  loginstart : false,
  room_length : 0,
  MY_URL : Server.url //接口请求的所在域名
};
const storage = window.localStorage;
const mutations ={
   /**
     * [update_direction 判断打开页面的顺序 'forward'是进入,'reverse'是返回]
     * @param  {[type]} state  [state对象]
     * @param  {[type]} status [传入的参数]
     * @return {[String]}      [direction 返回 'forward' 或者 'reverse']
     */
    [types.UPDATE_DIRECTION] (state , status){
      state.direction = status;
    },
    
    /**
     * [saveRouter 保存路由对象,方便其他组件调用 => this.$router.state.router]
     * @param  {[type]} state  [vuex自带的本身对象]
     * @param  {[type]} status [传入的参数]
     * @return {[String]}      [路由对象]
     */
    [types.SAVE_ROUTER] ( state , status){
      state.router = status;
    },
    /**
     * [makePage 标记页面]
     * @param  {[type]} state  [vuex自带的本身对象]
     * @param  {[type]} status [传入的参数]
     * @return {[String]}      [路由对象]
     */
    [types.MAKE_PAGE] ( state , status){
      state.pageName = status;
    },
    [types.CHECK_LOGIN_STATUS] (state , status){
      if( !storage.getItem(types.CHECK_LOGIN_STATUS) ){
        storage.setItem(types.CHECK_LOGIN_STATUS,false);
        return false;
      }
      if(!!status){
        if(!!status.obj){

          storage.setItem("USER_EMAIL",status.obj.email);
          storage.setItem("USER_NAME",status.obj.username);
          storage.setItem("_ID",status.obj._id);
        }
      }
      
      state.loginstart = storage.getItem(types.CHECK_LOGIN_STATUS) == "true" ? true : false ;
    },
    change_MY_URL (state,newdata){
      state.MY_URL = newdata;
    },
    update_room_length(state,data){
      state.room_length = data;
    }
}
export default new Vuex.Store({
  state,
  mutations
});
