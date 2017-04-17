<template>
  <div class='message-newbox'>
    <div class="nav">
		<ul class='flex'>
			<li class='flex-1' :class="checkedtab('tab-container1') " @click="clicktab('tab-container1')" >
				<a href="javascript:;">
					Theme
					<mt-badge size="small" type='error'>30</mt-badge>
				</a>
			</li>
			<li class='flex-1' :class="checkedtab('tab-container2') " @click="clicktab('tab-container2')" >
				<a href="javascript:;">
					Unread
					<mt-badge size="small" type='error'>30</mt-badge>
				</a>
			</li>
			<li class='flex-1' :class="checkedtab('tab-container3') " @click="clicktab('tab-container3')" >
				<a href="javascript:;">
					Flagged
					<mt-badge size="small" type='error'>30</mt-badge>
				</a>
			</li>
		</ul>
     
    </div>

    <div class="page-tab-container">
      <div class='page-js'>
      	
      	<p>聊天主题</p>
      	<p>每一条都是新的主题,您可以点击进去查看详细的聊天记录</p>
      </div>
      <mt-tab-container class="page-tabbar-tab-container" v-model="active" swipeable>
        <mt-tab-container-item id="tab-container1">
        <div class="page-loadmore">
		    <div class="page-loadmore-wrapper" ref="wrapper" >
		      <mt-loadmore :bottom-method="loadBottom" @bottom-status-change="handleBottomChange" :bottom-all-loaded="allLoaded" ref="loadmore">
		        <ul class="page-loadmore-list">
		          <li v-for="item in list" class='pm-item-list' >
		          	<div class='pm-item-divbox'>
		          		
			          	<div class='pm-item-head flex'>
			          		<span class='messageicon icon-favor'></span>
			          		<span class='flex-1 pi-head-cont'>Them: 测试一下</span>
			          		<span>
			          		<mt-button size="small" type="danger">
			          			Delete
			          			<span class='messageicon icon-delete' slot='icon'></span>
			          		</mt-button>
			          		</span>
			          	</div>
						<div class='pm-item-cont flex'>
							<router-link to='/message/more' class='flex'>
							<div class='my-imgersandname'>
								<div class='my-imgers'>
									<img src="http://www.tt-elmontyouthsoccer.com/html/upload/headimg/58004f1c6a73b.jpg">
								</div>
								<span class='my-name'>
									45465568@qq.com
								</span>
							</div>
							<div class='my-message-info flex-1'>
								<div class='ms-content'>
									<span class='clamp-3'>ASDASDAS1sadas sadasASDASDAS1sadas ASDASDAS1sadas ASDASDAS1sadas ASDASDAS1sadas ASDASDAS1sadas ASDASDAS1sadas</span>
									
								</div>
								<div class='ms-sj'></div>
							</div>
							<div class='jiantou'>
								<span class='messageicon icon-right'></span>
							</div>
						</router-link>
						</div>
						<div class='pm-item-foot flex'>
							<span class='clamp-1 flex-1'>Order:NO.21621er:NO.216er:NO.216</span>
							<span class='clamp-1 flex-1'>Total: $17.00 $17.00 $17.00</span>
							<router-link to='/message/more'><mt-button size="small" class='vorder-btn' >View Orders</mt-button></router-link>
			          			
			          		
						</div>
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
		</div>
        </mt-tab-container-item>
        <mt-tab-container-item id="tab-container2">
          <mt-cell v-for="n in 5" :key='n' title="tab-container 2"></mt-cell>
        </mt-tab-container-item>
        <mt-tab-container-item id="tab-container3">
          <mt-cell v-for="n in 7" :key='n' title="tab-container 3"></mt-cell>
        </mt-tab-container-item>
      </mt-tab-container>
    </div>

	<div class='message-info flex-right'>
		<router-link to='/message/more'>
		<mt-button size="small" type="primary" >
		新建聊天主题
		<span class='messageicon icon-mark' slot='icon'></span>
		</mt-button>
		</router-link>
	</div>

  </div>
</template>

<script>
import '../../../assets/font/message/iconfont.css'
import '../../../assets/css/page/message/index.css'
export default {
  	data() {
	    return {
	     	active: 'tab-container1',
		   	list: [],
		    allLoaded: false,
		    bottomStatus: '',
		    wrapperHeight: 0
	    };
  	},
 	methods:{
	  	checkedtab (cur){
	  		if(this.active == cur){
	  			return 'table-cur';
	  		}else{
	  			return '';
	  		}
	  	},
	  	clicktab (cur){
	  		console.log("onclick")
	  		this.active = cur;
	  	},
	  	handleBottomChange(status) {
	        this.bottomStatus = status;
	    },
	  	loadBottom(id) {
		    setTimeout(() => {
		      let lastValue = this.list[this.list.length - 1];
		      if (lastValue < 5) {
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
      for (let i = 1; i <= 5; i++) {
        this.list.push(i);
      }
    },
    mounted() {
      this.wrapperHeight = document.documentElement.clientHeight - this.$refs.wrapper.getBoundingClientRect().top;
    }
};
</script>

