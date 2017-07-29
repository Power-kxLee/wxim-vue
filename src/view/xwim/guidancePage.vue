<template>
	
	<div class='guidance-page appviews'>
	<mt-swipe :auto="0" @change="handleChange">
		<mt-swipe-item class='slide-1 slidecommit'>
			<div id="particles_box" class='commoncanvas'></div>
			<div class='swiper-content'>

				<p class='slide-1-p1 ani'  swiper-animate-effect="bounceInLeft" swiper-animate-duration="0.8s" swiper-animate-delay="0.1s">夜空中最亮的</p>
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
		</mt-swipe-item>
		<mt-swipe-item class='slide-2 slidecommit'>
			<div id="particles_box_2" class='commoncanvas' ref='particles_box_2'></div>
			<div class='ani slide-2-p1' swiper-animate-effect="lightSpeedIn" swiper-animate-duration="0.8s" swiper-animate-delay="0.2s">
			啦啦啦啦,我是卖瓜的小贤哥
			</div>
			<div class='ani slide-2-p2' swiper-animate-effect="zoomInDown" swiper-animate-duration="0.8s" swiper-animate-delay="0.9s">
			给我一张PSD,还你一张GIF            		
			</div>
		</mt-swipe-item>
		<mt-swipe-item class='slide-3 slidecommit'>
			<div class='ani slide-3-p1' swiper-animate-effect="flip" swiper-animate-duration="0.8s" swiper-animate-delay="0.2s">
			恭喜你,你离新的大门就差最后一步
			</div>
			<div class='ani slide-3-p2' swiper-animate-effect="rotateIn" swiper-animate-duration="0.8s" swiper-animate-delay="0.8s">
			<span @click="changenext" >请用你的手指头 疯狂的点击这里</span>
			</div>
		</mt-swipe-item>
	</mt-swipe>

	</div>
</template>
<style type="text/css" scoped>
	.commoncanvas{
		position: absolute;
		top:0;
		left: 0;
		width: 100%;
		height: 100%;

	}
	.swiper-content{
		position: absolute;
		top:0;
		left: 0;
		width: 100%;
		height: 100%;
	}
	.guidance-page{
		width: 100%;
		height: 100%;
		padding-top: 0;
		z-index: 99999;
	}
	.swiper-container {
	    width: 100%;
	    height: 100%;
	}
	.commoncanvas {
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
    left: 104px;
	}
	.slide-1 .slide-1-p2{
	    visibility: visible;
	    position: relative;
	    top: 130px;
	    left: 0;
	    text-align: left;
	    
	}
	.slide-1 .slide-1-p2 span{
		transform: rotate(-22deg);
	}
	.slide-1 .slide-1-p3{
	    visibility: visible;
	    position: relative;
	    top: 280px;
	    right: 0;
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
        width: 100%;
    text-align: center;
	}
	.slide-3 .slide-3-p2{
		color: black;
		    visibility: visible;
    position: absolute;
       bottom: 80px;
    display: block;
    text-align: center;
    width: 100%;
	}
</style>
<script type="text/javascript">
	import "../../assets/css/animate.min.css";	
	import '../../assets/plugin/particles/particles.min.js';
	import swiper_animate from "../../assets/js/swiper.animate.min.js";
	import particles_background from '../../assets/plugin/particles/background.js';
	import particles_background2 from '../../assets/plugin/particles/background2.js';

	export default {
		data (){
			return {
				acalss:"ani",
				allswiper : null
			};
		},
		mounted (){
			this.allswiper = document.querySelectorAll(".slidecommit");

			particlesJS('particles_box',particles_background);
			swiper_animate.swiperAnimateCache();
			swiper_animate.swiperAnimate(this.allswiper,0);
			
		},
		methods: {
			handleChange(index){

				if(index == 1  && this.$refs.particles_box_2.children.length < 1 ){
					particlesJS('particles_box_2',particles_background2);
				}
				swiper_animate.swiperAnimate(this.allswiper,index);
			},
			changenext (){
				console.log(this.$router);
				this.$emit('changenext');
			},
			initParticleJS(){
				particlesJS('login-box',particles_background);
			}
		}
	};

</script>