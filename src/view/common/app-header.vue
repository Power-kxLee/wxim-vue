<template>	
	<div class='head'>
		<mt-header :title="titlename">
	      <router-link to=''  slot="left">
	        <mt-button @click='onclickback' icon="back">返回</mt-button>
	      </router-link>
	      <mt-button icon="more" slot="right"></mt-button>
	    </mt-header>
	</div>
</template>
<script>
  export default {
  	props:{
  		titlename:String,
      to : String
  	},
  	methods:{
  		onclickback () {
  		 	var router =  this.$store.state.router;
  			router.go(-1);
  		}
  	}
  }; 
</script>