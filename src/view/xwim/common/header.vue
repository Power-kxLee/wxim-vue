<template>
	<header id='wx_bd_head'>
		<div class='header_t flex-def'>
			
			<h1 class='flex-1'>信微<span v-if='room_length > 0'>({{room_length}})</span></h1>
			<span class='flex layout_icon icon-weixinduan-sousuo '></span>
			<span @click="popupVisible1 = true" size="large" ref="button" class='flex layout_icon icon-jiahao'></span>
		</div>

		<mt-popup v-model="popupVisible1" popup-transition="popup-fade" class="mint-popup-1" :style="{ top: buttonBottom  + 'px', right : 10 + 'px' }">
	      <ul>
	      	<li class='flex-def lt-fq' @click="popupVisible4 = true" size="large"> 
	      		<img class='lt-img' src="../../../assets/image/msqip.png">
	      		<span class='lt-text'>发起群聊</span>
	      	</li>
	      	
	      </ul>
	    </mt-popup>
		<mt-popup v-model="popupVisible4" position="bottom" class="mint-popup-4">
	    	<create-im  v-on:crateRoom='crateRoom'></create-im>
    	</mt-popup>
	</header>
</template>
<script type="text/javascript">
	import createIm from '../createIM.vue';
	
	export default {
		data (){
			return {
				popupVisible1:false,
				popupVisible4:false,
        		buttonBottom  : 0,
        		room_length : 0
			}
		},
		mounted(){
			this.buttonBottom = this.$refs.button.getBoundingClientRect().bottom;
		},
		created(){
			
		},
		components : {
	  		createIm
	  	},
		methods: {
			crateRoom(){
				this.popupVisible4 = false;
            	this.popupVisible1 = false;
            	
			}
		}
	}
</script>
<style type="text/css" >
	#wx_bd_head .mint-popup-1{
		    width: 200px;
    -webkit-transform: translate(-50%);
    transform: translate(-50%);
    background: #393a3f;
    left: initial;
    transform : none;
        box-shadow: 0px -1px 7px #2C2D32;
	}
	#wx_bd_head .mint-popup-1 ul{
		border:1px solid #2C2D32;
		border-bottom: 0px;
	}
	#wx_bd_head .mint-popup-4 {
		width: 100%;
	}
	#wx_bd_head .v-modal{
		opacity: 0;
	}
	#wx_bd_head {
		height: 50px;
		background: #393A3F;
		color: white;
		position: absolute;
		top:0px;
		width: 100%;
	}
	#wx_bd_head  > .header_t{
		height: 100%;
	}
	#wx_bd_head .header_t h1{
		font-size: 20px;
		padding-left: 15px;
	}
	#wx_bd_head > .header_t > .layout_icon{
		font-size: 26px;
		height: 100%;
		padding: 0 20px;
	}
	#wx_bd_head .lt-fq {
		padding: 14px 15px;
		border-bottom: 1px solid #3A3B41;
		border-top: 1px solid #36383C;
		padding-bottom: 14px;
		margin-bottom: 1px;
		position: relative;
		top:0px;
		left: 0px;
	}
	#wx_bd_head .lt-fq:before{
		content: "";
		position: absolute;
		bottom: -2px;
		left: 0px;
		display: block;
		width: 100%;
		height: 1px;
		background: #2C2D32;
	}
	#wx_bd_head .lt-fq:nth-last-of-type(1){
	}
	#wx_bd_head .lt-fq .lt-img{
		width: 25px;
		height: 25px;
		display: block;
		margin-right: 15px;
	}
	#wx_bd_head .lt-fq .lt-text {
		font-size: 16px;
	}
	
</style>