<template>
<footer class="layout_footer">
	<mt-tabbar v-model="check_tabbar" class='f_inbody'>
		<mt-tab-item id="/wx">
			
			<div slot="icon" class="mint-tab-item-icon">
				<span class="layout_icon icon-liaotianqipao"></span>
			</div> 
			信微
		</mt-tab-item>
		<mt-tab-item id="/find">
			<div slot="icon"  class="mint-tab-item-icon">
				<span class="layout_icon icon-tongxunlu"></span>
			</div> 
			通讯录
		</mt-tab-item>
		<mt-tab-item id="/book">
			<div slot="icon"  class="mint-tab-item-icon"><span class="layout_icon icon-faxian"></span></div> 
			发现
		</mt-tab-item>
		<mt-tab-item id="/my">
			<div slot="icon"  class="mint-tab-item-icon">
				<span class="layout_icon icon-tongxunlu1"></span>
			</div> 
			我
		</mt-tab-item>
	</mt-tabbar>


</footer>
	
</template>
<script type="text/javascript">
	export default {
		data() {
			return {
				check_tabbar:"/wx"
			};
		},

		watch: {
			check_tabbar (val,oldVal){
				this.$router.push(val);
			},
			'$route' (to, from) {}
		},
		methods : {
			mytag (path){
				this.selected = path
			}
		},
		mounted(){
			this.check_tabbar = this.$route.path;
		}
	};
</script>
<style type="text/css" >
	footer.layout_footer{
		height: 55px;
		color: #FCFCFC;
		position: absolute;
		bottom:0px;
		left: 0px;
		width: 100%;
	}
	footer.layout_footer a{
		color: #AAAAAA;
	}
	footer.layout_footer .mint-tab-item-icon > *{
		font-size: 22px
	}
	footer.layout_footer .mint-tab-item-label{
		font-size: 12px;
	}
	footer.layout_footer .mint-tabbar > .mint-tab-item.is-selected{
		color: #46C01B;
		background: none;
	}
	.layout_footer .f_inbody{
		border-top: 1px solid #dadada;
	}
</style>