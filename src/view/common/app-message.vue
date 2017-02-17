<template>
	<div class='app-message'>
		<!-- Root element of PhotoSwipe. Must have class pswp. -->
		
		<div class="mui-content">
			<div id="msg-list">
				<div class="msg-list-height my-gallery" data-pswp-uid="1">
					
					<div v-for='n in 3' class="msg-item msg-item-self">
						<div class="nameandimg">
							
							<img class="msg-user" src="http://www.tt-elmontyouthsoccer.com/html/upload/headimg/58004f1c6a73b.jpg">
							
						   	<span class="msg-name">578242325@qq.com</span>
						</div>
						<div class="ms-content-warp">
							
							<div class="msg-content">

								<div class="msg-content-inner">
									<figure>
							          <a data-size="670x712" href="http://www.tt-elmontyouthsoccer.com/html/upload/temp_img/201610/9854/57ff4c6e06795.jpg" >
							          <img src="http://www.tt-elmontyouthsoccer.com/html/upload/item_img/201610/9854/1476349038507971124.jpg">
							          </a>
							        </figure>
									<span>请问请问</span>
								</div>
								<div class="msg-content-arrow"></div>
							</div>
							<div class="msg-content-time">10-13 01:57</div>
						</div>
						<div class="mui-item-clear"></div>
					</div>
					
					<div v-for='n in 3' class="msg-item ">
						<div class="nameandimg">
							
							<img class="msg-user-img" src="http://www.tt-elmontyouthsoccer.com/images/megmjlogo.jpg">
							
						   	<span class="msg-name">admin</span>
						</div>
						<div class="ms-content-warp">
							
							<div class="msg-content">

								<div class="msg-content-inner">
									
									<span>ok testsasdas</span>
								</div>
								<div class="msg-content-arrow"></div>
							</div>
							<div class="msg-content-time">11-30 07:24</div>
						</div>
						<div class="mui-item-clear"></div>
					</div>
				</div>

				
			</div>
		</div>
		<footer>
			<form action="http://www.tt-elmontyouthsoccer.com/mobile-user-doaddcontent" method="post">
				<div class="usergoban">
					<input type="hidden" name="pmid" value="2711">
					<input type="hidden" name="touid" value="1">
					<input type="hidden" name="is_comment" value="0">
					<div class="footer-left">
						<div class="mifileinput">
							<span class="mifileinput-z"> <span class="pmicon icon-tupian"></span> </span>
							<input type="file" id="filebtn" name="productpic[]">
						</div>
					</div>
					<div class="footer-center">
						<textarea verify="" name="content" id="msg-text" type="text" class="input-text"></textarea>
					</div>
					<label for="" class="footer-right">
						<mt-button plain size="small" type="primary" class='util-btn'>
						Send
						</mt-button>
					</label>
				</div>
				<div class="addnewform-img">
						<ul>
							
						</ul>
				</div>
			</form>
		</footer>
	<div class="pswp" tabindex="-1" role="dialog" aria-hidden="true">

	    <!-- Background of PhotoSwipe. 
	         It's a separate element as animating opacity is faster than rgba(). -->
	    <div class="pswp__bg"></div>

	    <!-- Slides wrapper with overflow:hidden. -->
	    <div class="pswp__scroll-wrap">

	        <!-- Container that holds slides. 
	            PhotoSwipe keeps only 3 of them in the DOM to save memory.
	            Don't modify these 3 pswp__item elements, data is added later on. -->
	        <div class="pswp__container">
	            <div class="pswp__item"></div>
	            <div class="pswp__item"></div>
	            <div class="pswp__item"></div>
	        </div>

	        <!-- Default (PhotoSwipeUI_Default) interface on top of sliding area. Can be changed. -->
	        <div class="pswp__ui pswp__ui--hidden">

	            <div class="pswp__top-bar">

	                <!--  Controls are self-explanatory. Order can be changed. -->

	                <div class="pswp__counter"></div>

	                <button class="pswp__button pswp__button--close" title="Close (Esc)"></button>

	                <button class="pswp__button pswp__button--share" title="Share"></button>

	                <button class="pswp__button pswp__button--fs" title="Toggle fullscreen"></button>

	                <button class="pswp__button pswp__button--zoom" title="Zoom in/out"></button>

	                <!-- Preloader demo http://codepen.io/dimsemenov/pen/yyBWoR -->
	                <!-- element will get class pswp__preloader--active when preloader is running -->
	                <div class="pswp__preloader">
	                    <div class="pswp__preloader__icn">
	                      <div class="pswp__preloader__cut">
	                        <div class="pswp__preloader__donut"></div>
	                      </div>
	                    </div>
	                </div>
	            </div>

	            <div class="pswp__share-modal pswp__share-modal--hidden pswp__single-tap">
	                <div class="pswp__share-tooltip"></div>	            </div> 


	            <button class="pswp__button pswp__button--arrow--left" title="Previous (arrow left)">
	            </button>

	            <button class="pswp__button pswp__button--arrow--right" title="Next (arrow right)">
	            </button>

	            <div class="pswp__caption">
	                <div class="pswp__caption__center"></div>
	            </div>

	        </div>

	    </div>

	</div>

	
	</div>
</template>
<script type="text/javascript">
	import '../../assets/plugin/photoSwipe/photoSwipe.css'; 
	import '../../assets/plugin/photoSwipe/default-skin/default-skin.css'; 
	import '../../assets/css/common/message.css'; 
	import initPhotoSwipeFromDOM from '../../assets/js/initPhotoSwipeFromDOM.js'; 


	export default {
		mounted (){
			//初始化缩略图放大
		    initPhotoSwipeFromDOM('.my-gallery');
		}
		
	}
</script>
