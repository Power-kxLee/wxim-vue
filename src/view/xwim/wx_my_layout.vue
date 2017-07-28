<template>
	<div>
		
		<im-header  ref='imhead'></im-header>
    
		<div id='layout_body' ref='body_dom' class='layout_two_body'>
     <transition  :name="transitionName"  >
			<router-view ref='body' ></router-view>
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
    components:{
      imHeader
    },
    watch: {
      '$route' (to, from) {
        this.update_title();
        var direction = this.$store.state.direction;
        this.transitionName = direction == "reverse" ? 'bounce-out' : 'bounce-in';
      }
    },
    methods:{
      update_title(){
        this.$refs.imhead.title =this.$route.name;
      }
    },
    mounted (){
      
        this.update_title();
	  }
  };
</script>
<style type="text/css">
	.layout_two_body{
	/*   padding-top: 50px;
  min-height: 100%;
      position: absolute;
      width: 100%; */
	}



</style>