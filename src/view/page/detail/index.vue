<template>

  <div class="page-loadmore">

    <div class='detail-header cf' >
      <div class='detail-header-name fl'>
        {{state}}
      </div>

      <div class='detial-header-list fr'>
        <span >State : </span>
        <span  @click="popupVisible = true">{{state}} <span class='detailicon icon-xiangxiajiantou'></span> </span>
      </div>
    </div>
    <div class="page-loadmore-wrapper" ref="wrapper" :style="{ height: wrapperHeight + 'px' }">
      <mt-loadmore :bottom-method="loadBottom" @bottom-status-change="handleBottomChange" :bottom-all-loaded="allLoaded" ref="loadmore">
        <ul class="page-loadmore-list">
          <li v-for="item in list" class="page-loadmore-listitem">
            <div class='seller '>
              <span class='seller-number' @click='test'> <span class='detailicon icon-wodedingdan'></span> ES21621</span>
              <span class='seller-state'>Waiting payment</span>
            </div>
            <div class='orderitem'>
              <router-link class='orderitem-tolink' :to="{ path: '/detail/more', query: { number: 111}}"  >
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
                <div class='o-total-price'>
                    <span>Total Item: <b>1</b></span>
                    <span>Total Cost: <b>$17.00</b></span>
                </div>
              </router-link>
            </div>
            <div class="o-tab-btn">
               <mt-button size="small">Confirm</mt-button>

            </div>
          </li>
        </ul>
        <div slot="bottom" class="mint-loadmore-bottom">
          <span v-show="bottomStatus !== 'loading'" :class="{ 'is-rotate': bottomStatus === 'drop' }">↑</span>
          <span v-show="bottomStatus === 'loading'">
            <mt-spinner type="snake"></mt-spinner>
          </span>
        </div>
      </mt-loadmore>
    </div>
    <lee-popup v-model='popupVisible' :slots='yearSlot' @changePopup='changePopup' @cancelPopup='cancelPopup'></lee-popup>

  </div>
</template>

<script type="text/babel">
  import '../../../assets/font/detail/iconfont.css'
  import '../../../assets/css/page/detail/index.css'
  import appHeader from '../../../view/common/app-header.vue';
  import leePopup from '../../twoComponents/popup1.vue';

  export default {
    data() {
      return {
        popupVisible: false,
        list: [],
        allLoaded: false,
        bottomStatus: '',
        wrapperHeight: 0,
        yearSlot: [{
          flex: 1,
          values: ['1984', '1985', '1986', '1987', '1988', '1989', '1990', '1991', '1992', '1993', '1994', '1995'],
          className: 'slot1'
        }],
        state:"All Order"
      };
    },
    components :{
      leePopup,
      appHeader
    },
    '$route' (to, from) {

        console.log(111111111111)
        
      },
    methods: {
      test (){
        
        this.$http.post(this.$store.state.postUrl+"/user/orderlist").then(function(d){
          console.log("请求/user-orderlist接口",d)
        });
      },
      /**
       * [cancelPopup 关闭弹出框]
       * @return {[type]} [description]
       */
      cancelPopup (){
        this.popupVisible = false;
      },
      /**
       * [changePopup 滑动选择]
       * @return {[type]} [description]
       */
      changePopup (picker, values){
        this.state = values[0];
      },
      handleBottomChange(status) {
        this.bottomStatus = status;
      },

      loadBottom(id) {
        setTimeout(() => {
          let lastValue = this.list[this.list.length - 1];
          if (lastValue < 40) {
            for (let i = 1; i <= 10; i++) {
              this.list.push(lastValue + i);
            }
          } else {
            this.allLoaded = true;
          }
          this.$refs.loadmore.onBottomLoaded(id);
        }, 1500);
      }
    },

    created() {
      for (let i = 1; i <= 20; i++) {
        this.list.push(i);
      }
    },

    mounted() {
      this.wrapperHeight = document.documentElement.clientHeight - this.$refs.wrapper.getBoundingClientRect().top;
    }
  };
</script>
