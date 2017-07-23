<template>
<footer class="layout_footer">
	<div class="mint-tabbar f_inbody">
		<router-link class="mint-tab-item "  @click.native="mytag('/wx')" :class='[selected == "/wx" ? "is-selected" : "" ]' to="/wx" >
			<div class="mint-tab-item-icon">
				<span class="layout_icon icon-liaotianqipao"></span>
			</div> 
			<div class="mint-tab-item-label">
				信微
			</div>
	    </router-link>
		<router-link class="mint-tab-item" @click.native="mytag('/book')" :class='[selected == "/book" ? "is-selected" : "" ]' to="/book">
			<div class="mint-tab-item-icon">
				<span class="layout_icon icon-tongxunlu"></span>
			</div> 
			<div class="mint-tab-item-label">
				通讯录
			</div>
		</router-link>
		<router-link class="mint-tab-item"  @click.native="mytag('/find')" :class='[selected == "/find" ? "is-selected" : "" ]'  to="/find">
			<div class="mint-tab-item-icon"><span class="layout_icon icon-faxian"></span></div> 
			<div class="mint-tab-item-label">
				发现
			</div>
		</router-link>
		<router-link class="mint-tab-item" @click.native="mytag('/my')" :class='[selected == "/my" ? "is-selected" : "" ]'  to="/my">
			<div class="mint-tab-item-icon">
				<span class="layout_icon icon-tongxunlu1"></span>
			</div> 
			<div class="mint-tab-item-label">
				我
			</div>
		</router-link>
	</div>
</footer>
	
</template>
<script type="text/javascript">
	export default {
		data() {
			return {
			  selected: '/wx'
			};
		},

		watch: {
			'$route' (to, from) {

			}
		},
		methods : {
			mytag (path){
				this.selected = path
			}
		},
		mounted(){
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