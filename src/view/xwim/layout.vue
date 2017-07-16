<template>
	<div>
		<im-header></im-header>
		<div id='layout_body' class='layout_body'>
			<transition :name="transitionName"  >
				<router-view class=''></router-view>
			</transition>
		</div>
		<im-footer></im-footer>
	</div>
</template>
<script type="text/javascript">
  	import imFooter from './common/footer.vue';
  	import imHeader from './common/header.vue';
  	
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
      imFooter,
      imHeader
    }
  };
</script>
<style type="text/css">
	.layout_body{
		    min-height: 100%;
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;

	}
	
	
</style>