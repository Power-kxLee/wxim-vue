<template>
  <div class="o-item-more">
	<div class='info-state flex'>
		<div class='state-cont'>
			<p>交易成功</p>
		</div>
	</div>
	<div class='info-address flex'>
		<div class='flex locationbox'>
			<span class='d-moreicon icon-location'></span>
		</div>
		<div class='address-cont'>
			<div class='address-cont-top flex'>
				<span>Name: Lee </span>
				<span>13630127852544 </span>
			</div>
			<div class='address-cont-bom'>
				收货地址: 广东省 佛山市 南海区 桂城街道 天安数码城 5期A座703
			</div>
		</div>
	</div>
	<article class='info-item-list'>
		<section class='info-detail-item'>
			<div class='seller '>
              <span class='seller-number'> <span class='detailicon icon-wodedingdan'></span> ES21621</span>
              <span class='seller-state'>Waiting payment</span>
            </div>
			<ul class="page-loadmore-list">
	          <li v-for="item in 2" class="page-loadmore-listitem">
	            
	            <div class='orderitem'>
	              <router-link class='orderitem-tolink' to='/detail/more'>
	                <div class='orderitem-top'>
	                  
	                  <div class='orderitem-img'>
	                    <img src="https://gw.alicdn.com/bao/uploaded/i1/TB1pmeFOpXXXXcJapXXXXXXXXXX_!!0-item_pic.jpg_120x120q50s150.jpg_.webp" >
	                  </div>
	                  <div class='orderitem-info'>
	                    <h3>16-17 Barcelona Home Soccer Jersey Shirt LFP Version</h3>
	                    <p class='info-o'> S : 1 </p>
	                  </div>
	                  <div class='orderitem-pay'>
	                    <div class='item-pay-data'>
	                      <p class='price'>$17.00</p>
	                      <p class='price'>
	                        <del>$33.99</del>
	                      </p>
	                    </div>
	                  </div>
	                </div>
	                
	              </router-link>
	            </div>
	           
	          </li>
	        </ul>
	        <div class='total-price'>
	        	<p class='flex'>
	        		<span class='flex-1'>Express total</span>
	        		<span >$0.00</span>
	        	</p>
	        	<p class='flex'>
	        		<span class='flex-1'>Total Cost</span>
	        		<span >$93.98</span>
	        	</p>
	        </div>
		</section>

		<section class='info-order-other'>
			<p>
				NO.: MJ21627
			</p>
			<p>Add Time: 2016-11-30 18:27:05</p>
			<p>Pay Time: 2016-11-30 18:27:05</p>
			<p>Shipped Time: Not yet shipped</p>
		</section>
	</article>
	<div class='info-item-util flex-right'>
		<mt-button plain size="small" class='util-btn'>
		<span class='d-moreicon icon-messagefill' slot='icon'></span>
		Message
		</mt-button>

		<mt-button plain size="small" type="primary" class='util-btn'>
		pay
		</mt-button>
	</div>
  </div>
</template>

<script type="text/babel">
  import '../../../assets/font/detail/more/iconfont.css'
  import '../../../assets/css/page/detail/index.css'
  import '../../../assets/css/page/detail/more.css'
  export default {
   	
  };
</script>
