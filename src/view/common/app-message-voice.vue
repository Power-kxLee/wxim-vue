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
                    <div v-if='talk' class='taptalk' @touchstart="touchstart" @touchend="touchend">
                        <span >按住 说话</span>
                    </div>
                    <div v-else class='textin'>
                        
					   <textarea row='1' cols="30" verify="" name="content" id="msg-text" type="text" class="input-text textareafield" @input='showheight'></textarea>
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
    				    <button  v-if='inputshow'  class='ms-send' type='button'>发送</button>
                        </transition>
                    </div>
                </div>
			</div>
		
		</form>
        <div class='speakframe'>
            
        </div>
	</footer>
</template>

<script type="text/javascript">
	export default{
        data (){
            return {
                inputshow:false,
                talk : false
            }
        },
        methods:{
            showheight(event){
                event.target.style.height = event.target.scrollHeight + "px";
                if(event.target.value.length < 1){
                    this.inputshow = false;
                    event.target.style.height = "25px";
                }else{
                    this.inputshow = true;
                }
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
            touchstart (){
                console.log("长按")
            },
            touchend(){
                console.log("松开")
            }                                                                                                                                                                                                                                                                                                                                   
        }
	}

</script>
<style type="text/css" scoped src='../../assets/font/message/more/iconfont.css'></style>
<style type="text/css" scoped src='../../assets/css/common/talk-tools.css'></style>

