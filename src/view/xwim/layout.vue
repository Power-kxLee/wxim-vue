<template>
	<div>
		<im-header ref='imheader'></im-header>
		<div id='layout_body' class='layout_body'>
			<transition :name="transitionName"  >
				<router-view @updata_room_length = 'updata_room_length'></router-view>
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
    methods :{
      updata_room_length(data){
        this.$refs.imheader.room_length = data;
      }
    },
    components:{
      imFooter,
      imHeader
    }
  };
</script>
