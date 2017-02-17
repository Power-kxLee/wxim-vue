<template>
  <div class="wishlist-vue">
    <div class="page-loadmore-wrapper" ref="wrapper" :style="{ height: wrapperHeight + 'px' }">
      <mt-loadmore :bottom-method="loadBottom" @bottom-status-change="handleBottomChange" :bottom-all-loaded="allLoaded" ref="loadmore">
        <ul class="page-loadmore-list">
          <li v-for="item in list" class="wl-content">
          		<a href="javascript:;" class='flex-def'>
          			<div class='wl-images flex'>
          				<img src="https://www.gogoalshop.com/html/upload/medium_img/201608/1/01470037547df7d71f31617.jpg" class='flex-1' >
          			</div>
          			<div class='flex-1 wl-cont-temp'>
          				<h4 class='wl-title'>15-16 SC Corinthians Away Orange Jersey Shirt</h4>
          				<p class='wl-price'>
          					<b>$</b>24.44
          				</p>
          			</div>
          		</a>
				      <span class='delete-icon'></span>
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
  </div>
</template>
<script type="text/babel">
  import '../../../assets/css/page/wishlist.css';
  export default {
    data() {
      return {
        list: [],
        allLoaded: false,
        bottomStatus: '',
        wrapperHeight: 0
      };
    },

    methods: {
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
