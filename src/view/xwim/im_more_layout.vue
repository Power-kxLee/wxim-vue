<template>
	<div>
		
		<im-header  ref='imhead'></im-header>
    
		<div id='layout_body' ref='body_dom' class='layout_two_body'>
			<router-view ref='body' v-on:scrollBottom='scrollBottom'></router-view>
    </div>
    <m-voice v-on:updatepadding='updatepadding'  @sendfn = "sendfn"></m-voice>
  </div>
</template>
<script type="text/javascript">
    import imHeader from './common/header_two.vue';
    import mVoice from "./app-message-voice.vue";
  export default {
    data () {
      return {
        MY_URL:this.$store.state.MY_URL,
        transitionName: 'bounce-in'
      }
    },
    components:{
      imHeader,
      mVoice
    },
   
    methods:{
      sendfn(form){
        this.$refs.body.sendfn(form);
      },      
      scrollBottom(data){
        this.$refs.body_dom.scrollTop = data;
      },
      updatepadding(data){
        this.$refs.body_dom.style.bottom = data+"px";
        this.scrollBottom(this.$refs.body.$refs.is_more_body.offsetHeight);
      }
    },
    mounted (){
      this.$refs.imhead.title =this.$route.params.title;
        
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