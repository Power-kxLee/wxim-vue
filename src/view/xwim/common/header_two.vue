<template>
	<header id='wx_bd_head_two'>
		<div class='header_t flex-def'>
			
			<a @click='goback' class='goback flex' href="javascript:;">
				<img src="../../../assets/image/fhjt.png" >
			</a>
			<span class='header_t_title'>{{title}}</span>
		</div>

		
	</header>
</template>
<script type="text/javascript">	
	export default {
		data (){
			return {
				title:""
			}
		},
		mounted(){
		},
		created(){
			console.log(this.$router)
		},
		components : {
	  	},
		methods: {
			goback(){

				router.go(-1);
			}
			
		}
	}
</script>
<style type="text/css" >
	
	#wx_bd_head_two {
		height: 50px;
		background: #393A3F;
		color: white;
		position: fixed;
		top:0px;
		width: 100%;
		z-index: 9;
	}
	#wx_bd_head_two  > .header_t{
		height: 100%;
	}
	#wx_bd_head_two .header_t h1{
		font-size: 20px;
		padding-left: 15px;
	}
	#wx_bd_head_two > .header_t > .iconfont{
		font-size: 26px;
		height: 100%;
		padding: 0 20px;
	}
	#wx_bd_head_two .goback{
		height: 100%;
		width: 50px;
		position: relative;
		margin-right: 10px;
	}
	#wx_bd_head_two .goback:before{
		content: "";
		display: block;
		position: absolute;
		top:50%;
		margin-top: -15px;
		right: 0px;
		height: 30px;
		width: 1px;
		background: #2E2E32;
	}
	#wx_bd_head_two .goback img{
		width: 20px;
		height: 20px;
	}
</style>