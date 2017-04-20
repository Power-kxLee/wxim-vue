<template>

	<div class='message-info '>
		<header class='flex-right'>
			
			<mt-button size="small" type="primary" >
				创建聊天房间
				<span class='messageicon icon-mark' slot='icon'></span>
			</mt-button>
		</header>
		<section class='createimform'>
			<article>
				<input type="hidden" v-model='formdata.creator'>
				<input type="hidden" v-model='formdata.date'>
				<input type="hidden" v-model='formdata.heat'>
				<a class="mint-cell mint-field" value="roomNumber">
					<div class="mint-cell-left"></div>
					<div class="mint-cell-wrapper">
						<div class="mint-cell-title">
							<span class="mint-cell-text">房间名 :</span>
						</div>
						<div class="mint-cell-value">
							<input   v-model='formdata.title' placeholder="请输入房间名" type="text" class="mint-field-core">				
							<div v-show='formdata.title.length > 0' @click="clearfun"  class="mint-field-clear" > <i class="mintui mintui-field-error"></i>
							</div>
							
							<div class="mint-field-other"></div>
						</div>
					</div>
					<div class="mint-cell-right"></div>
				</a>
				<div class='haoma'>
					<div class ="haoma">
						<a class="mint-cell mint-field" value="roomNumber">
							<div class="mint-cell-left"></div>
							<div class="mint-cell-wrapper">
								<div class="mint-cell-title">
									<span class="mint-cell-text">房间号 :</span>
								</div>
								<div class="mint-cell-value">
									<input  v-model='formdata.number' type="number" class="mint-field-core" readonly='true'>					
									
									<div class="mint-field-other">
										<span class="neicon" @click='randomHomeNum'>
											更换房号(随机看运气)
										</span>
									</div>
								</div>
							</div>
							<div class="mint-cell-right"></div>
						</a>
					</div>
					
				</div>
			</article>
			<footer>
				<mt-button @click='crateRoom' size="small" type='primary'>创建</mt-button>

			</footer>
		</section>
	</div>

  </div>
</template>
<style type="text/css">
	.createimform {
		clear: both;
		margin-top: 20px;
	}
	.createimform footer{
		text-align: center;
		margin: 40px 0;
	}
	.haoma .mint-cell-value{
		padding-right: 80px;
	}
	.haoma .neicon{
		position: relative;
		top:18px;
	}
</style>
<script>
let storage = window.localStorage;
const randoms = () => {
	return ("0000000" + 100000000 * Math.random()).match(/(\d{6})(\.|$)/)[1]
}
export default {
  	data() {
	    return {
	    	sjnumber : "13212",
	    	showclear : false,
	    	formdata : {
	    		title:"",
	    		number:randoms(),
	    		creator:storage.getItem("USER_EMAIL"),
	    		date : new Date().getTime(),
	    		heat : 1,
	    	}
	    }
  	},
 	methods:{
	  crateRoom (){
	  	this.$emit("crateRoom",event,this.formdata)

	  },
	  randomHomeNum (){
	  	this.formdata.number = randoms();
	  },
	  clearfun (){
	  	this.formdata.title = "";
	  }
  	},
 	created() {
     
    },
    mounted() {
     	
    }
};
</script>

