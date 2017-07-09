<template>
	<div>
		
		<im-header ref='imhead'></im-header>
		<div id='layout_two_body' class='layout_two_body'>
			<router-view ></router-view>
		</div>
	</div>
</template>
<script type="text/javascript">
  	import imHeader from './common/header_two.vue';
	export default {
    data () {
      return {
      	MY_URL:this.$store.state.MY_URL,
        transitionName: 'bounce-in'
      }
    },

    watch: {
      '$route' (to, from) {

        var direction = this.$store.state.direction;
        this.transitionName = direction == "reverse" ? 'bounce-out' : 'bounce-in';
      }
    },
    components:{
      imHeader
    },
    mounted (){
    	this.$refs.imhead.title =this.$route.params.title
	}
  };
</script>
<style type="text/css">
	.layout_two_body{
		padding-top: 50px;
		min-height: 100%;
    position: absolute;
    width: 100%;
	}

</style>