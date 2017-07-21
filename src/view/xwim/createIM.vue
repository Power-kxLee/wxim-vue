<template>

	<div class='message-info '>
		
		<section class='createimform'>
			<article>
				<input type="hidden" v-model='formdata.creator'>
				<input type="hidden" v-model='formdata.date'>
				<input type="hidden" v-model='formdata.heat'>
				<a class=" mint-field" value="roomNumber">
					<div class="mint-cell-wrapper">
						<div class="mint-cell-img">
							<span class="mint-cell-text">
								<img src="../../assets/image/enent.png">
							</span>
						</div>
						<div class="mint-cell-value">
							<input  v-model='formdata.number' type="hidden" class="mint-field-core" readonly='true'>

							<input  v-model='formdata.title' placeholder="请输入房间名" type="text" class="room_name">				
							<div v-show='formdata.title.length > 0' @click="clearfun"  class="mint-field-clear" > <i class="mintui mintui-field-error"></i>
							</div>
							
							<div class="mint-field-other"></div>
						</div>
					</div>
					<div class="mint-cell-right"></div>
				</a>
			</article>
			<footer>
				<mt-button @click='crateRoom' size="small" type='primary'>确定</mt-button>

			</footer>
		</section>
	</div>

  </div>
</template>
<style type="text/css">

</style>
<script>
import { Indicator } from 'mint-ui';
let storage = window.localStorage;
const randoms = () => {
	return ("0000000" + 100000000 * Math.random()).match(/(\d{6})(\.|$)/)[1]
}
export default {

  	data() {
	    return {
	    	MY_URL:this.$store.state.MY_URL,
	    	showform : false,
	    	showclear : false,
	    	username : storage.getItem("USER_NAME"),
	    	formdata : {
	    		title:"",
	    		number:randoms(),
	    		creator:storage.getItem("USER_EMAIL"),
	    		date : "",
	    		heat : 1
	    	}
	    }
  	},
  	props :{
  		roomNumber:[String, Number]
  	},
  	mounted(){
  		//console.log("this.formdata",this.roomNumber)
  	},
 	methods:{
	  crateRoom (){
	  	
	  	this.formdata.date = parseInt(new Date().getTime() / 1000);
	  	let formdata = this.formdata;
		Indicator.open();
        this.$ajax({
            method : "post",
            data:formdata,
            url:this.MY_URL+"/createim"
        }).then(d =>{
            //console.log("创建成功",d)
            if(d.data.code == 401){
           		let homedata = d.data.roomdata.homedata;
            	formdata.title = "";
            	formdata.number = randoms();

				this.$socket.emit("newRoom",homedata);
				this.$emit("crateRoom");//触发事件监听父组件
				//this.$socketIo.emit("join",roomArray);
                //this.$socketIo.emit("get_room",d.data.roomdata.homedata);
            }
            Indicator.close();
        }).catch(err =>{
        	Indicator.close();
        });

	  },
	  randomHomeNum (){
	  	this.formdata.number = randoms();
	  },
	  clearfun (){
	  	this.formdata.title = "";
	  }
  	}
  	
};
</script>

<style type="text/css" scoped>
	.message-info {
		    box-shadow: 0px 4px 13px #949494;
	}
	.mint-cell-wrapper{
		padding: 45px 10px;
		padding-bottom: 20px
	}
	.mint-cell-img{
		    position: absolute;
    top: 50px;
    left: 10px;
	}
	.mint-cell-img .mint-cell-text img{
		width: 30px;
		height: 30px;
		display: block;
	}
	.room_name {
		    border: 0px;
    display: block;
    border-bottom: 1px solid #cecece;
    width: 100%;
    line-height: 40px;
    height: 40px;
    padding-left: 40px;
    outline: none;
	}
	.room_name:focus{
		border-bottom: 1px solid #46C01B;
	}
	.message-info footer{
		text-align: center;
		padding-bottom: 20px;
	}
</style>