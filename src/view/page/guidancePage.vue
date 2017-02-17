<template>
	
	<div class='guidance-page'>

		<div class="swiper-container">
	        <div class="swiper-wrapper">
	            <div class="swiper-slide slide-1">
	            	<div id="login-box" class='commoncanvas'></div>
					<div class='swiper-content'>

						<p class='slide-1-p1 ani'  swiper-animate-effect="bounceInLeft" swiper-animate-duration="0.8s" swiper-animate-delay="0.7s">夜空中最亮的</p>
						<div class='slide-1-p1-title ani'   swiper-animate-effect="bounceInDown" swiper-animate-duration="0.8s" swiper-animate-delay="1.3s">星</div>
						<div class='ani slide-1-p2' swiper-animate-effect="rotateInDownLeft" swiper-animate-duration="0.8s" swiper-animate-delay="1.6s">
							<span>我就是最亮的星</span>
						</div>
						<div class='ani slide-1-p3' swiper-animate-effect="rotateInDownRight" swiper-animate-duration="0.8s" swiper-animate-delay="2.5s">
							<span>这你都找到这颗星~ 厉害了我的哥</span>
						</div>
						<div class='ani slide-1-p4' swiper-animate-effect="bounceInDown" swiper-animate-duration="0.8s" swiper-animate-delay="3s">
							赶紧来看看
							<div class='ani'> >>> </div>
						</div>
					</div>
	            </div>
	            <div class="swiper-slide slide-2">
	            	<div id="login-box2" class='commoncanvas'></div>
	            	<div class='ani slide-2-p1' swiper-animate-effect="lightSpeedIn" swiper-animate-duration="0.8s" swiper-animate-delay="0.2s">
	            		啦啦啦啦,我是卖瓜的小贤哥
	            	</div>
	            	<div class='ani slide-2-p2' swiper-animate-effect="zoomInDown" swiper-animate-duration="0.8s" swiper-animate-delay="0.9s">
						给我一张PSD,还你一张GIF            		
	            	</div>
	            </div>
	            <div class="swiper-slide slide-3">
	            	<div class='ani slide-3-p1' swiper-animate-effect="flip" swiper-animate-duration="0.8s" swiper-animate-delay="0.2s">
	            		恭喜你,你离新的大门就差最后一步
	            	</div>
	            	<div class='ani slide-3-p2' swiper-animate-effect="rotateIn" swiper-animate-duration="0.8s" swiper-animate-delay="0.8s">
	            		<router-link to="/"> 请用你的手指头 疯狂的点击这里</router-link>	
	            	</div>
	            </div>

	        </div>
	        <div class="swiper-pagination"></div>
	    </div>

	</div>
</template>
<style type="text/css" scoped>
	.commoncanvas{
		position: absolute;
		top:0px;
		left: 0px;
		width: 100%;
		height: 100%;

	}
	.swiper-content{
		position: absolute;
		top:0px;
		left: 0px;
		width: 100%;
		height: 100%;
	}
	.guidance-page{
		width: 100%;
		height: 100%;
		padding-top: 0px;
	}
	.swiper-container {
	    width: 100%;
	    height: 100%;
	}
	.swiper-slide {
		position: relative;
	    text-align: center;
	    font-size: 18px;
	    background: #fff;
	    /* Center slide text vertically */
	    display: -webkit-box;
	    display: -ms-flexbox;
	    display: -webkit-flex;
	    display: flex;
	    -webkit-box-pack: center;
	    -ms-flex-pack: center;
	    -webkit-justify-content: center;
	    justify-content: center;
	    -webkit-box-align: center;
	    -ms-flex-align: center;
	    -webkit-align-items: center;
	    align-items: center;
	}
	.ani{
		color: white;
	}
	.slide-1{
		background: black;
	}
	.slide-2{
		background: #3cacff;
	}
	.slide-3{
		background: white;
	}
	.slide-1 .slide-1-p1{
		    color: white;
	    font-size: 16px;
	    position: relative;
	    top: 85px;
	}
	.slide-1 .slide-1-p1 b{
		font-size: 32px;
	}
	.slide-1-p1-title{
		color: white;
	    font-size: 36px;
	    position: relative;
	    top: 50px;
	    right: -70px;
	}
	.slide-1 .slide-1-p2{
	    visibility: visible;
	    position: relative;
	    top: 130px;
	    left: 0px;
	    text-align: left;
	    
	}
	.slide-1 .slide-1-p2 span{
		transform: rotate(-22deg);
	}
	.slide-1 .slide-1-p3{
	    visibility: visible;
	    position: relative;
	    top: 280px;
	    right: 0px;
	    text-align: right;
	}
	.slide-1 .slide-1-p3 span{
		transform: rotate(22deg);
	}
	.slide-1 .slide-1-p4{
		position: absolute;
		bottom:50px;
		text-align: center;
		width: 100%;

	}
	.slide-2-p1{
		position: absolute;
		top:150px;
		left: 10px;
	}
	.slide-2-p2{
		position: absolute;
		top:400px;
		right: 20px;
	}
	.slide-3 .slide-3-p1{
		color: black;
		    position: absolute;
    top: 40%;
	}
	.slide-3 .slide-3-p2{
		color: black;
		    visibility: visible;
    position: absolute;
    bottom: 80px;
	}
</style>
<script type="text/javascript">
	import "../../assets/plugin/Swiper-master/dist/js/swiper.min.js";
	import A from "../../assets/plugin/Swiper-master/dist/js/swiper.animate1.0.2.min.js";
	import "../../assets/plugin/Swiper-master/dist/css/swiper.min.css";
	import "../../assets/css/common/animate.min.css";	
	import '../../assets/plugin/particles/particles.min.js';
	import particles_background from '../../assets/plugin/particles/background.js';
	import particles_background2 from '../../assets/plugin/particles/background2.js';

	export default {
		data (){
			return {
				acalss:"ani"
			}
		},
		mounted (){

			particlesJS('login-box',particles_background);
			particlesJS('login-box2',particles_background2);


			let myswiper = new Swiper('.swiper-container',{
				grabCursor: false,
				pagination: '.swiper-pagination',
				resistanceRatio :0,
				onInit: function(swiper){ 
					A.swiperAnimateCache(swiper); //隐藏动画元素 
    				A.swiperAnimate(swiper); //初始化完成开始动画
				}, 
				onSlideChangeEnd: function(swiper){ 
					A.swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
				} 
			});
		}
	} 

</script>