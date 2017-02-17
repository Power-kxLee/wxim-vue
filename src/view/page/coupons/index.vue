<template>
	<div class='coupons'>
		<article>
			<!-- 优惠卷 -->
			<section class='coupons-code-page'>
				<div class='c-body'>
					<header class='c-header flex'>
						<span>图标</span>
						<span class='flex-1 '>
							<span class='c-header-title'>
								Coupon Code 
								<mt-badge size="small" type="error">3</mt-badge>
							</span>
							
						</span>
						<router-link to=''>
							<span>图标</span>
							<span>History</span>
						</router-link>
					</header>
					<footer class='c-footer'>
						<div class="prod-coupon bdr-b" >
							<span class="part-note-msg">Unused coupons</span>
							<span class="coupon-total-nums"> Total of 1 piece</span>
							<div class="coupon-slider J_ping">
								<div class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted" >
									<ul class="jd-slider-container coupons-container mui-scroll" id="couponlist" >
										 
			            				<li v-for='n in 10' class="jd-slider-item coupon_unit blue J_ping"  get-coupon-num="XbkJIYrV2qN3eRPihT">
											<div class="expe_disc">
												<div class="expeNum">
													<span class="rmb">$</span>
													<span class="actual-number">1.11</span>
												</div>
												<div class="condi_msg">$111.00 Usable</div>
											</div>
											<div class="coupon_icon"></div>
											<div class="oper_msg">
												<div class="oper_msg_get">GET</div>
											</div> <em class="left_m"></em>
										</li>
									</ul>
								</div>
							</div>
						</div>
						<div class="prod-coupon bdr-b" id="couponDivShow">
							<span class="part-note-msg">Get the coupon</span>
							<span class="coupon-total-nums"> Total of 1 piece</span>
							<div class="coupon-slider J_ping">
								<div class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted" >
									<ul class="jd-slider-container coupons-container mui-scroll" id="couponlist" >
										 
			            				<li v-for='n in 10' class="jd-slider-item coupon_unit blue J_ping"  get-coupon-num="XbkJIYrV2qN3eRPihT">
											<div class="expe_disc">
												<div class="expeNum">
													<span class="rmb">$</span>
													<span class="actual-number">1.11</span>
												</div>
												<div class="condi_msg">$111.00 Usable</div>
											</div>
											<div class="coupon_icon"></div>
											<div class="oper_msg">
												<div class="oper_msg_get">GET</div>
											</div> <em class="left_m"></em>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</footer>	
				</div>
				
			</section>
			<!-- 优惠金 -->
			<section class='coupons-cash'>
				<div class='c-body'>
					<header class='c-header flex'>
						<span>图标</span>
						<span class='flex-1 '>
							<span class='c-header-title'>Cash Coupon<mt-badge size="small" type="error">30</mt-badge></span>
							
							
						</span>
						<router-link to=''>
							<span>图标</span>
							<span>History</span>
						</router-link>
					</header>
					<footer class='c-footer'>
						<mt-tab-container class="page-tabbar-tab-container" >
					        <mt-tab-container-item >
					          <mt-cell v-for="n in 5" title="tab-container 1"></mt-cell>
					        </mt-tab-container-item>
					      
					   </mt-tab-container>
					</footer>
				</div>
			</section>
		</article>
		
	</div>

</template>
<script type="text/javascript">
	import IScroll from '../../../assets/js/iscroll-lite.js';
	import '../../../assets/css/page/coupons/index.css';

	export default {
		mounted (){
			var cSlider = document.querySelectorAll('.coupon-slider');

			cSlider.forEach( (elem,i) => {
				new IScroll(elem, { eventPassthrough: true, scrollX: true, scrollY: false, preventDefault: false });
			});
			
		}
	}
</script>
