<!--  -->

<template>
	<footer class='messagtc'>
		<form action="" method="post">
			<div class="usergoban flex">
				<div class="footer-left">
                    <div class="mifileinput" @click='taptalk'>
                        <span v-if='talk' class='iconfont icon-jianpan'></span>
                        <span v-else class='iconfont icon-yuyin'></span>
					</div>
				</div>
				<div class="footer-center">
                    <div v-if='talk' class='taptalk' :class="{ talkmodule : talkmodule }" @touchstart="touchstart" @touchend="touchend">
                        <span >{{talkname}}</span>
                    </div>
                    <div v-else class='textin'>
                        <div @keyup.enter='sendio'  id='textareafield' class="textareafield" @input='textinfn'  contenteditable="true" ></div>
					   <input type="hidden" v-model='formdata.message'>
                      
                    </div>
				</div>
                <div class='footer-bq'> 
                    <span class='iconfont icon-biaoqing'></span>
                </div>
                <div class='footer-jia' >
                    <div class='f-jia-warp'>
                        <transition name="fade">
                        <span v-if='!inputshow' class='iconfont icon-jiahao'></span>
                        </transition>
                        <transition name="fade">
    				    <button @click='sendio'  v-if='inputshow'  class='ms-send' type='button'>发送</button>
                        </transition>
                    </div>
                </div>
			</div>
		
		</form>
        <div class='speakframe ' v-show='talkmodule'>
            <div class='flex-def talkdef'>
                <template v-if="!talkcancel">
                    <div class='speakicon'>
                        <span class='iconfont icon-maikefeng'></span>
                    </div>
                    <div class='speakanimate'>
                        <ul>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                    </div>
                </template>
                <template v-else>
                    <div class='flex talkcancelbox'>
                        
                        <span class='iconfont icon-fanhui'></span>
                    </div>
                </template>
            </div>
            <h4 :class='{talkcancelname:talkcancel}'>{{talkmodulename}}</h4>
        </div>
	</footer>
</template>

<script type="text/javascript">
    

    const storage = window.localStorage;
    
    const $ = (obj) =>{

        const addClass = (classname) => {
            for (let i = 0 ; i < obj.length ; i++){
                obj[i].className = classname;
            }
        }

        return {
            addClass
        }
    }
	export default{
        data (){
            return {
                socketIo     : null,
                inputshow    : false,
                talk         : false,
                talkmodule   : false,
                talkcancel   : false,
                touchY       : 0,
                touchclientY : 0,
                textareval   : "",
                formdata : {
                    number : "",
                    date : 0,
                    useremail : "",
                    username : "",
                    message : "",
                    identity : 0,
                    if_ready : 1

                }
            }
        },
       
        methods:{
            textinfn (event){
                let inhtml = event.target.innerHTML;
                this.inputshow = inhtml.length < 1 ? false : true;
                this.formdata.message = event.target.innerHTML;
            },
            sendio (){
                let text = document.getElementById("textareafield");
                this.formdata.date = parseInt(new Date().getTime() / 1000);
                ////console.log("this.formdata",this.formdata)
                this.$emit("sendfn",this.formdata);
                text.innerHTML = "";
                this.inputshow  = false;
                return false;
            },
            taptalk (){
                this.talk = this.talk ? false : true;
                this.$nextTick(function(){
                    var textarea = document.querySelector(".textareafield");
                    if(!this.talk){
                        textarea.focus();
                    }else{
                        this.inputshow = false;
                    }
                })
            },
            touchstart (event){
                this.talkmodule = true;

                //console.log("长按",event.touches[0].clientX,event.touches[0].clientY)
                this.touchY = event.touches[0].clientY;
                document.addEventListener('touchmove',this.touchmovefn, false);
            },
            touchend(){
                this.talkmodule = false;
                //console.log(document.removeEventListener)
                document.removeEventListener('touchmove',this.touchmovefn, false); 
                //console.log("松开")
            },
            touchmovefn (event){
                
                event.stopPropagation();
                if(this.touchY - event.touches[0].clientY  > 100 ){
                    this.touchclientY = event.touches[0].clientY;
                    this.talkcancel = true;
                }else if(this.touchclientY < event.touches[0].clientY){ //向下滑动
                    this.talkcancel = false;
                }
                ////console.log("启动touchmove事件",event.touches[0].clientX,event.touches[0].clientY)
            },
            talkTool (){
                let talkli = document.querySelector(".speakanimate").getElementsByTagName("li");
                let talkliLength = talkli.length ;
                
                $(talkli).addClass("yinboan");

                talkli[0].addEventListener("webkitAnimationEnd",function(){
                    ////console.log("第一个结束")
                    for (let i = 0 ; i < talkliLength ; i++){
                        if(i != talkliLength-1){
                            talkli[i].className = talkli[i].className.replace("yinboan", '');
                        }
                        
                    }
                    setTimeout(()=>{
                        $(talkli).addClass("yinboan");
                    })
                });
            }
        },
        computed : {
            talkname (){
                if(this.talkcancel){
                    return "松开手指,取消发送"
                }else{

                    return !this.talkmodule ? "按住 说话" : "松开 发送";
                }
                 
            },
            talkmodulename (){
                return !this.talkcancel ? "手指上滑 取消发送" : "松开手指,取消发送";
            }
        },
        created(){

            this.formdata.number = this.$route.params.number;
            this.formdata.useremail = storage.getItem("USER_EMAIL");
            this.formdata.username =  storage.getItem("USER_NAME");
        },
        mounted (){
            let textareafield = document.querySelector(".textareafield");
            textareafield.style.width = textareafield.offsetWidth+"px";
        },
        updated(){
            if(this.talkmodule && !this.talkcancel){
                this.talkTool();
            }
        }

	};
    

   

    </script>
<style type="text/css" scoped src='../../assets/font/message/more/iconfont.css'></style>
<style type="text/css" scoped src='../../assets/css/common/talk-tools.css'></style>

