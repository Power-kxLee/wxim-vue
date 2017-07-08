import * as types from '../mutation-types'


const state = {
	direction: 'forward'
}

const mutations = {
	/**
  	 * [update_direction 判断打开页面的顺序 'forward'是进入,'reverse'是返回]
  	 * @param  {[type]} state  [state对象]
  	 * @param  {[type]} status [传入的参数]
  	 * @return {[String]}      [direction 返回 'forward' 或者 'reverse']
  	 */
	[types.UPDATE_DIRECTION] (state , status){
		state.direction = status;
	}
}

const actions = {
	test (context){
		context.commit(types.UPDATE_DIRECTION);
	}
}

export default {
	state,
	mutations,
	actions
}