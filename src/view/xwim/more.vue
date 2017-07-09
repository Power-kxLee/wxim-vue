<template>
	<div class='app-message many_conetnt'>
		
		<div class="mui-content">
			<div id="msg-list">
				<div class="msg-list-height my-gallery" data-pswp-uid="1">
					<div v-for='(value,i) in msgarry' class="msg-item " :class='[  useremail == value.useremail ? "msg-item-self" : ""]'>
						<div class="nameandimg">
							
							<img v-if='useremail == value.useremail' class="msg-user" src='../../assets/image/huaji2.jpg'>
							<img v-else class="msg-user" src='../../assets/image/huaji1.jpg'>
							
						   	<span class="msg-name">{{value.userename}}</span>
						</div>
						<div class="ms-content-warp">
							<h4 class='inusername'>{{value.username}}</h4>
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
		

	
	</div>
</template>
<style type="text/css" scople>
	.inusername{
		    font-size: 12px;
    color: #AAAAAA;
	}
	.msg-item-self .inusername{
		text-align: right;
		padding-right: 13px;
	}
	.nt-time{
		display: block;
    font-size: 12px;
    clear: both;
	}
	#layout_two_body{
		background: #EBEBEB;
	}
</style>
<script type="text/javascript">
	import '../../assets/css/common/message.css'; 
	import mVoice from "./app-message-voice.vue"
	import io from "../../socket-client";
	const storage = window.localStorage;
	export default {
		data (){
			return {
				username : storage.getItem("USER_NAME"),
                useremail : storage.getItem("USER_EMAIL"),
				number    : this.$route.params.number,
				msgarry   :[],
				socketIo  : null ,
				goaway	  : 0,
				MY_URL    :this.$store.state.MY_URL
			}
		},
		components : {
			mVoice
		},
		beforeRouteLeave (to, from, next) {
    		//console.log("离开房间",{useremail:this.useremail,number:this.number,length:this.msgarry.length})
	      	this.socketIo.emit("leave",{
	      		number : this.number,
	      		useremail : this.useremail,
	      		username : this.username
	      	});
	      	this.$ajax({
	      		method : "post",
	      		data : {useremail:this.useremail,number:this.number,length:this.msgarry.length},
	      		url:this.MY_URL+"/im/recordlength"
	      	}).then(options =>{

	      	}).catch(err =>{

	      	});
          
          next();
        },
		
		
		methods : {
			//发送消息
			sendfn (form){
				console.log("发送form",form)
				////console.log("this.data",this.data)
				this.$ajax({
					method :"post",
					data:form,
					url:this.MY_URL+"/im/sendmessage"
				}).then(options =>{
					form.username = this.username;
					this.socketIo.emit("sendmsg",{
						form,
						number : this.number,
						username:this.username
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
        	//console.log(this.$route)
        	const number = this.number;
        	const username = this.username;
        	const useremail = this.useremail;
            this.socketIo = io.io.connect(io.url);
        	
        	//非法进入聊天室,直接退出
        	if(!number || !username || !useremail){
        		this.$router.push({path:"/"});
        		return false;
        	}
        	
        	//获取房间的聊天信息
        	this.$ajax({
				method :"post",
				data:{number},
				url:this.MY_URL+"/im/queryallmsg"
			}).then(options =>{
				//console.log("房间信息",options)
				this.msgarry = !!options.data.msgarry ? options.data.msgarry : [];
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
            	//console.log("用户",msg.username,"加入了房间,当前人数是",msg.headcount)
            });
            this.socketIo.on("user_leave",(d) =>{

            	//console.log("用户",d.username,"退出了房间,当前人数是",d.length)
            });
            this.socketIo.on("event", (msg) => {
                let gallery = document.querySelector(".my-gallery");
                let div = document.createElement("div");
                div.innerHTML = msg;
                gallery.insertBefore(div,gallery.childNodes[0])
                //console.log(document.querySelector(".appviews") )
            }); 
            this.socketIo.on("roomgetmsg",(msg) => {
            	////console.log("this.msgarry",this.msgarry)
            	this.msgarry.push(msg);
            	this.$nextTick(() =>{
            		window.scrollTo(0,document.body.scrollHeight);
            	})
            });

            	
        },
        mounted (){
			
			//初始化缩略图放大
		    //initPhotoSwipeFromDOM('.my-gallery');
            		
		    


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