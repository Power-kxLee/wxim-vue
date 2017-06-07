<template>
	<div class='app-message'>
		
		<!-- Root element of PhotoSwipe. Must have class pswp. -->
		
		<div class="mui-content">
			<div id="msg-list">
				<div class="msg-list-height my-gallery" data-pswp-uid="1">
					<div v-for='(value,i) in msgarry' class="msg-item " :class='[  useremail == value.useremail ? "msg-item-self" : ""]'>
						<div class="nameandimg">
							
							<img class="msg-user" src="http://www.tt-elmontyouthsoccer.com/html/upload/headimg/58004f1c6a73b.jpg">
							
						   	<span class="msg-name">{{value.userename}}</span>
						</div>
						<div class="ms-content-warp">
							
							<div class="msg-content">

								<div class="msg-content-inner">
									
									<span>{{value.message}}</span>
								</div>
								<div class="msg-content-arrow"></div>
							</div>
							<div class="msg-conte	nt-time">{{value.date | timestamp}}</div>
						</div>
						<div class="mui-item-clear"></div>
					</div>
					
					
				</div>
				
				<m-voice @sendfn = "sendfn"></m-voice>
				
			</div>
		</div>
		
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
	import '../../../assets/plugin/photoSwipe/photoSwipe.css'; 
	import '../../../assets/plugin/photoSwipe/default-skin/default-skin.css'; 
	import '../../../assets/css/common/message.css'; 
	import initPhotoSwipeFromDOM from '../../../assets/js/initPhotoSwipeFromDOM.js'; 
	import mVoice from "./app-message-voice.vue"
	import io from "../../../socket-client";
	const storage = window.localStorage;
	export default {
		data (){
			return {
				useremail : this.$route.query.useremail,
				number    : this.$route.query.number,
				username  : this.$route.query.username,
				msgarry   :[],
				socketIo  : null ,
				MY_URL    :this.$store.state.MY_URL
			}
		},
		components : {
			mVoice
		},
		
		watch: {
	      '$route' (to, from) {	   

	      	this.socketIo.emit("leave",{
	      		number : this.number,
	      		useremail : this.useremail,
	      		username : this.username
	      	});
	      	console.log({useremail:this.useremail,number:this.number,length:this.msgarry.length})
	      	this.$ajax({
	      		method : "post",
	      		data : {useremail:this.useremail,number:this.number,length:this.msgarry.length},
	      		url:this.MY_URL+"/im/recordlength"
	      	}).then(options =>{

	      	}).catch(err =>{

	      	});
	      }
	    },
		methods : {
			//发送消息
			sendfn (form){
				//console.log("this.data",this.data)
				this.$ajax({
					method :"post",
					data:form,
					url:this.MY_URL+"/im/sendmessage"
				}).then(options =>{

					this.socketIo.emit("sendmsg",{
						form,
						number : this.number
					});

				}).catch(err =>{

				})
			}
		},
		filters : {
	  		timestamp (value){
	  			return timestampFormat(value);
	  		}
	  	},

        created(){
        	console.log(this.$route)
        	const number = this.number;
        	const username = this.username;
        	const useremail = this.useremail;
            this.socketIo = io.io.connect(io.url);
        	
        	//非法进入聊天室,直接退出
        	if(!number || !username || !useremail){
        		this.$router.push({path:"/message"});
        		return false;
        	}
        	
        	//获取房间的聊天信息
        	this.$ajax({
				method :"post",
				data:{number},
				url:this.MY_URL+"/im/queryallmsg"
			}).then(options =>{

				this.msgarry = options.data.msgarry
				//保持在最底部
				this.$nextTick(() =>{
            		window.scrollTo(0,document.body.scrollHeight);
            	});
			}).catch(err =>{

			});
       

        	//加入聊天室
            this.socketIo.on("connect", () =>{
            	this.socketIo.emit("join",{
            		number ,
            		username , 
            		useremail
            	});
            });
            
            this.socketIo.on("newJoinUser",(msg) =>{
            	console.log("用户",msg.username,"加入了房间,当前人数是",msg.headcount)
            });
            this.socketIo.on("user_leave",(d) =>{

            	console.log("用户",d.username,"退出了房间,当前人数是",d.length)
            });
            this.socketIo.on("event", (msg) => {
                let gallery = document.querySelector(".my-gallery");
                let div = document.createElement("div");
                div.innerHTML = msg;
                gallery.insertBefore(div,gallery.childNodes[0])
                console.log(document.querySelector(".appviews") )
                console.log("有最新的消息",msg)
            }); 
            this.socketIo.on("roomgetmsg",(msg) => {
            	console.log("房间内收到的信息是",msg)
            	//console.log("this.msgarry",this.msgarry)
            	this.msgarry.push(msg);
            	this.$nextTick(() =>{
            		window.scrollTo(0,document.body.scrollHeight);
            	})
            });

            	
        },
        mounted (){
			
			//初始化缩略图放大
		    initPhotoSwipeFromDOM('.my-gallery');
            		
		    


		}
		
	}
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
