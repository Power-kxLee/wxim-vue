<!-- 基于mint-ui 二次封装popup组件 -->
<!-- 组件需要传入 -->
<!-- v-model => Bolllean 显示和关闭组件 -->
<!-- :slots => [Object,Array] 数组,显示列表 -->
<!-- @changePopup => function 选择数据的回调函数 分别是picker, values 这两个参数 -->
<!-- @cancelPopup => function 关闭弹出框函数 -->
<template>
  <div>
    <mt-popup v-model="value" :closeOnClickModal='false' position="bottom" class="mint-popup-4">
	    <mt-picker :slots="slots" :showToolbar='true' :visible-item-count="5" @change='changePopup'>
	      <slot>
	        <div class='popuputilhead cf'>
	         <mt-button size="small" class='fl' @click.native='cancelPopup'>Cancel</mt-button>
	         <mt-button size="small" class='fr' @click.native='cancelPopup'  type="primary">Confirm</mt-button>
	        </div>

	      </slot>
	    </mt-picker>
    </mt-popup>
  </div>
</template>

<style>
      .popuputilhead{
        background: #eee;
        padding: 6px;
      }

      .mint-popup-1 {
        width: 200px;
        border-radius: 8px;
        padding: 10px;
        transform: translate(-50%, 0);
      }
     

      .mint-popup-1::before {
        triangle: 10px top #fff;
        content: '';
        position: absolute;
        top: -20px;
        right: 50px;
      }

      .mint-popup-2 {
        width: 100%;
        height: 50px;
        text-align: center;
        background-color: rgba(0,0,0,.7);
        backface-visibility: hidden;
      }

      .mint-popup-2 p {
        line-height: 50px;
        color: #fff;
      }

      .mint-popup-3 {
        width: 100%;
        height: 100%;
        background-color: #fff;
      }

      .mint-popup-3 .mint-button {
        position: absolute;
        width: 90%;
        top: 50%;
        left: 5%;
        transform: translateY(-50%);
      }

      .mint-popup-4 {
        width: 100%;
        .picker-slot-wrapper, .picker-item {
          backface-visibility: hidden;
        }
      }
      .picker-item.picker-selected{
            background: #efefef;
      }
</style>

<script type="text/babel">
  export default {
  	data (){
  		return {
  		}
  	},
  	props:{
		slots:[Object,Array],
		value:Boolean
  	},

  	methods:{
  		changePopup (picker, values){
  			this.$emit("changePopup",picker, values);
  		},
  		cancelPopup(){
  			this.$emit("cancelPopup");
  		}
  	},
  	computed :{
  		
  	}
  };
</script>
