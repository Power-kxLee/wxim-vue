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
				msgarry:[],
				socketIo : null ,
				MY_URL:this.$store.state.MY_URL
			}
		},
		components : {
			mVoice
		},
		watch: {
	      '$route' (to, from) {
	      	console.log("离开")
	      	this.socketIo.emit("leave");
	      }
	    },
		methods : {
			sendfn (form){
				//console.log("this.data",this.data)
				console.log(form)
				this.$ajax({
					method :"post",
					data:form,
					url:this.MY_URL+"/im/sendmessage"
				}).then(options =>{
					console.log(options)
					this.socketIo.emit("sendmsg",form);

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
        	
        	const number = this.$route.query.number
        	const username = this.$route.query.username	
        	const useremail = this.$route.query.useremail
            this.socketIo = io.io.connect(io.url);
        	
        	//非法进入聊天室,直接退出
        	if(!number || !username || !useremail){
        		this.$router.push({path:"/message"});
        		return false;
        	}
        	

	        	this.$ajax({
					method :"post",
					data:{number},
					url:this.MY_URL+"/im/queryallmsg"
				}).then(options =>{
					console.log(options.data.msgarry)
					console.log(JSON.stringify(options.data.msgarry))
					this.msgarry = options.data.msgarry
				}).catch(err =>{

				});
       
        	console.log( storage.getItem("chatRoom"+number),"chatRoom"+number )

        	//加入聊天室
            this.socketIo.on("connect", () =>{
            	this.socketIo.emit("join",{
            		number ,
            		username ,
            		useremail
            	});
            });
            this.socketIo.on("getmsg",(msg) => {
            	this.msgarry.push(msg);
            	this.$nextTick(() =>{
            		window.scrollTo(0,document.body.scrollHeight);
            	})
            })
            this.socketIo.on("newJoinUser",(msg) =>{
            	console.log("用户",msg.username,"加入了房间,当前人数是",msg.headcount)
            });
            this.socketIo.on("msg",(msg,num) =>{

            	console.log("用户",msg,"退出了房间,当前人数是",num)
            });
            this.socketIo.on("event", (msg) => {
                let gallery = document.querySelector(".my-gallery");
                let div = document.createElement("div");
                div.innerHTML = msg;
                gallery.insertBefore(div,gallery.childNodes[0])
                console.log(document.querySelector(".appviews") )
                console.log("有最新的消息",msg)
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
