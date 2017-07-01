<template>
	<header id='wx_bd_head'>
		<div class='header_t flex-def'>
			
			<h1 class='flex-1'>信微(12)</h1>
			<span class='flex iconfont icon-weixinduan-sousuo '></span>
			<span @click="popupVisible1 = true" size="large" ref="button" class='flex iconfont icon-jiahao'></span>
		</div>

		<mt-popup v-model="popupVisible1" popup-transition="popup-fade" class="mint-popup-1" :style="{ top: buttonBottom  + 'px', right : 0 + 'px' }">
	      <ul>
	      	<li class='flex-def lt-fq'> 
	      		<img src="../../../assets/image/msqip.png">
	      		<span class='lt-text'>发起群聊</span>
	      	</li>
	      </ul>
	    </mt-popup>
	</header>
</template>
<script type="text/javascript">
	export default {
		data (){
			return {
				popupVisible1:false,
        		buttonBottom  : 0
			}
		},
		mounted(){
			this.buttonBottom = this.$refs.button.getBoundingClientRect().bottom;
			console.log("this.$refs.button",this.$refs.button.getBoundingClientRect().bottom)
		}
	}
</script>
<style type="text/css" >
	#wx_bd_head .mint-popup-1{
		    width: 200px;
    padding: 10px;
    -webkit-transform: translate(-50%);
    transform: translate(-50%);
    background: #393a3f;
    left: initial;
    transform : none;
	}
	#wx_bd_head .v-modal{
		opacity: 0;
	}
	#wx_bd_head {
		height: 50px;
		background: #393A3F;
		color: white;
		position: fixed;
		top:0px;
		width: 100%;
		z-index: 9;
	}
	#wx_bd_head  > .header_t{
		height: 100%;
	}
	#wx_bd_head .header_t h1{
		font-size: 20px;
		padding-left: 15px;
	}
	#wx_bd_head > .header_t > .iconfont{
		font-size: 26px;
		height: 100%;
		padding: 0 20px;
	}
	#wx_bd_head .lt-fq {
		width: 25px;
		height: 25px;
		display: block;
	}
	#wx_bd_head .lt-fq .lt-text {
		display: block;
	}
</style>