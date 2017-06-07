<template>
  <div class='message-newbox'>

    <div class="page-tab-container">
      
        <div class="page-loadmore">
		    <div class="page-loadmore-wrapper" ref="wrapper" >
		    	<div class="msg-room-list" v-for="(item,i) in list">
		    		<router-link :to="{ path: '/message/more', query: { number: item.number,username:username , useremail:useremail}}"  >
		    		<div class='msg-rl-warp flex-def'>
		    			<div class='msg-room-img'>
		    				<img src="http://www.tt-elmontyouthsoccer.com/html/upload/headimg/58004f1c6a73b.jpg">
		    			</div>
						<article class='msg-room-article'>
							<header>{{item.title }} {{item.number}}</header>
							<section v-if='item.roomnewmsg.length > 0'>{{item.roomnewmsg[0].useremail}} : {{item.roomnewmsg[0].message}}</section>
						</article>
						<div v-if='item.roomnewmsg.length > 0' class='msg-room-date'>
							{{item.roomnewmsg[0].date |timestamp }}
						</div>
		    		</div>
		    		</router-link>
		    	</div>
		    	
		      
		        <div slot="bottom" class="mint-loadmore-bottom">
		          <span v-show="bottomStatus !== 'loading'" :class="{ 'is-rotate': bottomStatus === 'drop' }">↑</span>
		          <span v-show="bottomStatus === 'loading'">
		            <mt-spinner type="snake"></mt-spinner>
		          </span>
		        </div>
		    </div>
		</div>
      
    </div>

	<create-im @crateRoom = "crateRoom"></create-im>

  </div>
</template>

<script>
import '../../../assets/font/message/iconfont.css';
import '../../../assets/css/page/message/index.css';
import createIm from './createIM.vue'
import io from "../../../socket-client";  
const storage = window.localStorage;
export default  {
  	data() {
	    return {
	    	MY_URL:this.$store.state.MY_URL,
	     	active: 'tab-container1',
		   	list: [],
        socketIo : null ,
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
    
    beforeRouteLeave (to, from, next) {

      if(this.list.length > 0){

        this.list.forEach( (elem,i) =>{
         
          //离开列表所有房间
          this.socketIo.emit("leave",{
            number : elem.number,
            useremail : this.useremail,
            username : this.username
          });

        });
      }

      next()
    },
    methods:{

      //创建房间
      crateRoom (e,form){
        this.$ajax({
          method : "post",
          data:form,
          url:this.MY_URL+"/createim"
        }).then(d =>{
          if(d.data.code == 401){
          	this.list.push(d.data.roomdata.homedata)
          }
        }).catch(err =>{
          });
        },

        //动态添加calss
        checkedtab (cur){
          if(this.active == cur){
            return 'table-cur';
          }else{
            return '';
          }
        },

      },
      filters : {
        timestamp (value){
        return timestampFormat(value);
      }
    },
 	  created() {
      
      //获取所有相关的房间信息
      this.$ajax({
        method :"post",
        data : {},
        url :this.MY_URL+"/getroomim"
      }).then( d =>{
        if(d.data.code == 401){

          this.list = d.data.imlistarry;
            for ( let i = 0 ; i < this.list.length ; i++ ){
              var socketIo = this.socketIo = io.io.connect(io.url);//创建链接
              socketIo.on("connect", () =>{
                  //加入房间
                  var roomArray = {
                    number:this.list[i].number ,
                    username :this.username,
                    useremail : this.useremail
                  }
                  socketIo.emit("join",roomArray);
                      
              });


              //接收消息
              socketIo.on("roomgetmsg",(d) => {
                d.if_ready = 0;

                let list_arry = this.list;

                for (let i = 0 ; i < list_arry.length ; i ++){
                  if(list_arry[i].number == d.number){
                    list_arry[i].roomnewmsg[0].message = d.message;
                    list_arry[i].roomnewmsg[0].date = d.date;
                    list_arry[i].roomnewmsg[0].useremail = d.useremail;
                  }
                }
                this.list = list_arry;


                
                
               
              });
            }
          
      	}
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
            return  zeroize(m) + '月' + zeroize(d) + '日 ' ;
        } else {
            return  Y + '年' + zeroize(m) + '月' + zeroize(d) + '日 ' + zeroize(H) + ':' + zeroize(i);
        }
    }
}
</script>

