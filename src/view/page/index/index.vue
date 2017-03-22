<template>
  <div class='index'>
   <!--App首页头部  -->
    <div class='head-img'>
      <div class='head-id-pic'>
        <img src="../../../assets/image/582819beNe89ce16d.png" >
      </div>
      <div class='head-setting cf' >
         <router-link to='/message' class='head-message fr'>
          <span class='indexicon icon-message'>
            <mt-badge size="small" color='#fdcb63'>30</mt-badge>
          </span>
        </router-link>
        <router-link to='/contact' class='head-setting-ri fr'>
          <span class='indexicon icon-settings'></span>
        </router-link>
        
        
       
      </div>
      <div class='head-info' @click='save'>
          <span class='my-img'>
              <img src="../../../assets/image/6135373832343233323531343739313739383233333937_big.jpg" >
          </span>
          <div class="my-person-info">
            <p class="my-jd-head-name">a578242325</p> 
            <p class="my-jd-head-type">
              <span class='indexicon icon-vip'></span>
              金牌会员</p>
            <div class="head-meassage">
              <span class='indexicon icon-location'></span>
              <span class="head-meassage-name"> Address Book
              </span>
            </div>
          </div>
      </div>
    </div>
    
    <article class='app-index-content'>
      <!-- 订单详情 -->
      <section class='order-module app-common-moduel'>
        <ul>
          <li class='ulist-banner cf'>
          
          <mt-cell title="我的订单" is-link icon="more" to='/detail/'  >
            <span >全部订单</span> 
            <span slot="icon" class='indexicon icon-calendar'></span>
          </mt-cell>

    

            <!-- <span solt=title>
                <span class='indexicon icon-calendar'></span>
                <span>我的订单</span>
            </span>
            <span class='fr mi-cel'>
                全部订单 <span class='indexicon icon-right'></span>
            </span> -->
          </li>
          <li class='ulist-page'>
              <router-link to="/detail">

                <div class='page-part'>
                  <div class='page-img'>
                    <span class='indexicon icon-pay'>
                       <mt-badge size="small" type="error">3</mt-badge>
                    </span>
                  </div>
                  <div class='page-nam'>
                    Unpaid

                  </div>
                </div>
              </router-link>
               <router-link to="/detail">
                <div class='page-part'>
                  <div class='page-img'>
                    <span class='indexicon icon-send'>
                      <mt-badge size="small" type="error">20</mt-badge>
                    </span>
                  </div>
                  <div class='page-nam'>
                    Waiting shipping
                  </div>
                </div>
             </router-link>
              <router-link to="/detail">
                <div class='page-part'>
                  <div class='page-img'>
                    <span class='indexicon icon-deliver'>
                      <mt-badge size="small" type="error">11</mt-badge>
                    </span>
                  </div>
                  <div class='page-nam'>
                    Shipped
                  </div>
                </div>
              </router-link>
              <router-link to="/detail">
                <div class='page-part'>
                  <div class='page-img'>
                    <span class='indexicon icon-evaluate'>
                      <mt-badge size="small" type="error">
                      9</mt-badge>
                    </span>
                  </div>
                  <div class='page-nam'>
                    To Be Reviewed
                  </div>
                </div>
              </router-link>
          </li>
        </ul>
      </section>
      <!-- 钱包展现 -->
      <section class='coupon-module app-common-moduel'>
        <router-link to='/coupons'>
        <ul>
          <li class='ulist-banner cf'>
          
          <mt-cell title="My Coupons" is-link icon="more"  >
            <span slot="icon" class='indexicon icon-moneybag'></span>
          </mt-cell>
          </li>
          <li class='ulist-page'>
              <a  href="">

                <div class='page-part'>
                  <div class='page-img'>
                    <span >
                      0.00
                    </span>
                  </div>
                  <div class='page-nam'>
                    Coupon Cash

                  </div>
                </div>
              </a>
              <a href="">
                <div class='page-part'>
                  <div class='page-img'>
                    <span >
                      12
                    </span>
                  </div>
                  <div class='page-nam'>
                    优惠卷
                  </div>
                </div>
              </a>
              
          </li>
        </ul>
        </router-link>
      </section>
      <section class='module-list app-common-moduel' >
        <div class='module-list-end'>
          <mt-cell to='/invite' title=" Invite your Friends" is-link icon="more"   >
            <span slot="icon" class='indexicon icon-friendadd'></span>
          </mt-cell>
          <mt-cell to='/wishlist' title="Wish List" is-link icon="more"  >
            <span slot="icon" class='indexicon icon-like'></span>
          </mt-cell>
          <mt-cell  to='/profile' title="Profile" is-link icon="more"  >
            <span slot="icon" class='indexicon icon-form'></span>
          </mt-cell>
          <mt-cell to='/contact' title="Contact" is-link icon="more"  >
            <span slot="icon" class='indexicon icon-addressbook'></span>
          </mt-cell>
          <mt-cell to='/password' title="Password" is-link icon="more"  >
            <span slot="icon" class='indexicon icon-password'></span>
          </mt-cell>
          <mt-cell to='/account' title="Account" is-link icon="more"  >
            <span slot="icon" class='indexicon icon-profile'></span>
          </mt-cell>
          <mt-cell to='/blog' title="New bulletins" is-link icon="more"  >
            <span slot="icon" class='indexicon icon-new'></span>
          </mt-cell>
          
        </div>
        
      </section>
    </article>

  </div>

</template>
<script type="text/babel">
  import '../../../assets/font/index/iconfont.css';
  import '../../../assets/css/page/index.css';
  export default {
    components: {
    },
    data() {
    	return {
	        
	    };
    },
    methods:{
      save () {
        console.log(this.$store.state.count)
        this.$http.post("/create").then(function(ret){
          console.log(ret)
        })
      }
    }
  };
</script>
