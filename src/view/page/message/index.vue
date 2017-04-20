<template>
  <div class='message-newbox'>
    <div class="nav">
		
     
    </div>

    <div class="page-tab-container">
      
      <mt-tab-container class="page-tabbar-tab-container" v-model="active" >
        <mt-tab-container-item id="tab-container1">
        <div class="page-loadmore">
		    <div class="page-loadmore-wrapper" ref="wrapper" >
		      <mt-loadmore >
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
      
      </mt-tab-container>
    </div>

	<create-im @crateRoom = "crateRoom"></create-im>

  </div>
</template>

<script>
import '../../../assets/font/message/iconfont.css';
import '../../../assets/css/page/message/index.css';
import createIm from './createIM.vue'
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
  	components : {
  		createIm
  	},
 	methods:{
 		crateRoom (e,form){
 			this.$ajax({
 				method : "post",
 				data:form,
 				url:"http://127.0.0.1:3000/createim"
 			}).then(data =>{
 				console.log(data)
 			}).catch(err =>{
 				console.log(err)
 			});
 		},
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
	    }
  	},

 	created() {
      /*this.$ajax({
      	method :"post",
      	
      })*/
    },
    mounted() {
      this.wrapperHeight = document.documentElement.clientHeight - this.$refs.wrapper.getBoundingClientRect().top;
    }
};
</script>

