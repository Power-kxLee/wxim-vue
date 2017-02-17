import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// 使用 vuex.commit("fn") 触发函数更改状态

//创建初始状态
const state = {
  count: 0,
  direction: 'forward', //作为进入新页面还是返回新页面 做依据
  router:{},
  pageName:"index",
  postUrl : "http://127.0.0.1:3000" //接口请求的所在域名
}
export default new Vuex.Store({
  state,
  mutations: {
  	/**
  	 * [update_direction 判断打开页面的顺序 'forward'是进入,'reverse'是返回]
  	 * @param  {[type]} state  [vuex自带的本身对象]
  	 * @param  {[type]} status [传入的参数]
  	 * @return {[String]}      [direction 返回 'forward' 或者 'reverse']
  	 */
    update_direction (state, status) {
    	state.direction = status;
    },
    /**
  	 * [saveRouter 保存路由对象,方便其他组件调用 => this.$router.state.router]
  	 * @param  {[type]} state  [vuex自带的本身对象]
  	 * @param  {[type]} status [传入的参数]
  	 * @return {[String]}      [路由对象]
  	 */
    saveRouter ( state , status){
    	state.router = status;
    },
    /**
  	 * [makePage 标记页面]
  	 * @param  {[type]} state  [vuex自带的本身对象]
  	 * @param  {[type]} status [传入的参数]
  	 * @return {[String]}      [路由对象]
  	 */
    makePage ( state , status){
    	state.pageName = status;
    },
    asdasdas ( state , status){
      state.ininState = status;
    }

    
  }
})
