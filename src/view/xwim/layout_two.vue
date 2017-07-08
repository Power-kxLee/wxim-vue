<template>
	<div>
		
		<im-header ref='imhead'></im-header>
		<div id='layout_two_body' class='layout_two_body'>

			<transition :name="transitionName"  >
				
				<router-view ></router-view>
			</transition>
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
		padding-bottom: 55px;
		min-height: 100%;
	}
	.bounce-out-enter-active {
	animation: boun-in-left .4s;
	}
	.bounce-out-leave-active { 
	animation: boun-out-right .4s;
	}
	.bounce-in-enter-active {
	animation: boun-in-right .4s;
	}
	.bounce-in-leave-active {
	animation: boun-out-left .4s;
	}
	@keyframes boun-in-left {
	0% {
	  transform: translate3d(-100%, 0, 0);
	}

	100% {
	  transform: translate3d(0, 0, 0);
	}
	}
	@keyframes boun-out-left {
	 0% {
	  transform: translate3d(0, 0, 0);
	}

	100% {
	  transform: translate3d(-100%, 0, 0);
	}
	}
	@keyframes boun-in-right {
	0% {
	  transform: translate3d(100%, 0, 0);
	}

	100% {
	  transform: translate3d(0, 0, 0);
	}
	}
	@keyframes boun-out-right {
	 0% {
	  transform: translate3d(0, 0, 0);
	}

	100% {
	  transform: translate3d(100%, 0, 0);
	}
	}
</style>