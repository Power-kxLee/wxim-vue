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
		          <li v-for="(item,i) in list" class='pm-item-list' >
		          	<div class='pm-item-divbox'>
		          		
			          	<div class='pm-item-head flex'>
			          		<span class='flex-1 pi-head-cont'>{{item.title }}</span>
			          		
			          	</div>
						<div class='pm-item-cont flex'>
							<router-link :to="{ path: '/message/more', query: { number: item.number,username:username , useremail:useremail}}"  class='flex'>
							<div class='my-imgersandname'>
								<div class='my-imgers'>
									<img src="http://www.tt-elmontyouthsoccer.com/html/upload/headimg/58004f1c6a73b.jpg">
								</div>
								<span class='my-name'>
									{{item.creator}}
								</span>
							</div>
							<div class='my-message-info flex-1'>
								<div class='ms-content'>
									{{item.date}}
									<span class='clamp-3'>{{item.date |timestamp }}</span>
									
								</div>
								<div class='ms-sj'></div>
							</div>
							<div class='jiantou'>
								<span class='messageicon icon-right'></span>
							</div>
						</router-link>
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
const storage = window.localStorage;
export default {
  	data() {
	    return {
	     	active: 'tab-container1',
		   	list: [],
		    allLoaded: false,
		    bottomStatus: '',
		    wrapperHeight: 0,
		    username : storage.getItem("USER_NAME"),
		    useremail : storage.getItem("USER_EMAIL")
	    };
  	},
  	components : {
  		createIm
  	},
 	methods:{
 		crateRoom (e,form){
 			console.log(form)
 			this.$ajax({
 				method : "post",
 				data:form,
 				url:"http://127.0.0.1:3000/createim"
 			}).then(d =>{
 				if(d.data.code == 401){
 					this.list.push(d.data.roomdata.homedata)
 				}
 				console.log(d.data)
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
  	filters : {
  		timestamp (value){
  			return timestampFormat(value);
  		}
  	},
 	created() {
      this.$ajax({
      	method :"post",
      	data : {},
      	url :"http://127.0.0.1:3000/getroomim"
      }).then( d =>{
      	if(d.data.code == 401){

      		this.list = d.data.imlistarry;
      	}
      	console.log("data",d.data.imlistarry)
      }).catch(err =>{
      	console.log(err)
      });
    },
    mounted() {
      this.wrapperHeight = document.documentElement.clientHeight - this.$refs.wrapper.getBoundingClientRect().top;
    }
};

const timestampFormat = ( timestamp ) => {

    const zeroize = ( num ) => {

        return (String(num).length == 1 ? '0' : '') + num;
    }
 
    const curTimestamp = parseInt(new Date().getTime() / 1000); //当前时间戳
    const timestampDiff = curTimestamp - timestamp; // 参数时间戳与当前时间戳相差秒数
 
    const curDate = new Date( curTimestamp * 1000 ); // 当前时间日期对象
    const tmDate = new Date( timestamp * 1000 );  // 参数时间戳转换成的日期对象
 
    const Y = tmDate.getFullYear(), m = tmDate.getMonth() + 1, d = tmDate.getDate();
    const H = tmDate.getHours(), i = tmDate.getMinutes(), s = tmDate.getSeconds();
 
    if ( timestampDiff < 60 ) { // 一分钟以内
        return "刚刚";
    } else if( timestampDiff < 3600 ) { // 一小时前之内
        return Math.floor( timestampDiff / 60 ) + "分钟前";
    } else if ( curDate.getFullYear() == Y && curDate.getMonth()+1 == m && curDate.getDate() == d ) {
        return '今天' + zeroize(H) + ':' + zeroize(i);
    } else {
        const newDate = new Date( (curTimestamp - 86400) * 1000 ); // 参数中的时间戳加一天转换成的日期对象
        if ( newDate.getFullYear() == Y && newDate.getMonth()+1 == m && newDate.getDate() == d ) {
            return '昨天' + zeroize(H) + ':' + zeroize(i);
        } else if ( curDate.getFullYear() == Y ) {
            return  zeroize(m) + '月' + zeroize(d) + '日 ' + zeroize(H) + ':' + zeroize(i);
        } else {
            return  Y + '年' + zeroize(m) + '月' + zeroize(d) + '日 ' + zeroize(H) + ':' + zeroize(i);
        }
    }
}
</script>

